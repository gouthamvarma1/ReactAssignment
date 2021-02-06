import React from "react";
import "./StudentTable.css"
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import TableHead from "@material-ui/core/TableHead";
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import { Link } from "react-router-dom";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  }
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#3f51b5",
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  const handleCancelPageButtonClick = (event) => {
    window.location.href="/lmsDashBoard";
  };


  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>

      <IconButton
        onClick={handleCancelPageButtonClick}
        aria-label="cancel"
      >
        {theme.direction === "rtl" ? <CancelIcon /> : <CancelIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

function createData(id, name, email, gender) {
  return { id, name, email, gender };
}

const rows = [
  createData("Student1", "Student Name1", "Student1@taxila.com", "MALE"),
  createData("Student2", "Student Name2", "Student2@taxila.com", "MALE"),
  createData("Student3", "Student Name3", "Student3@taxila.com", "MALE"),
  createData("Student4", "Student Name4", "Student4@taxila.com", "MALE"),
  createData("Student5", "Student Name5", "Student5@taxila.com", "MALE"),
  createData("Student6", "Student Name6", "Student6@taxila.com", "MALE"),
  createData("Student7", "Student Name7", "Student7@taxila.com", "MALE"),
  createData("Student8", "Student Name7", "Student8@taxila.com", "MALE"),
  createData("Student9", "Student Name8", "Student9@taxila.com", "MALE"),
  createData("Student11", "Student Name10", "Student10@taxila.com", "MALE"),
  createData("Student11", "Student Name11", "Student11@taxila.com", "MALE"),
  createData("Student12", "Student Name12", "Student12@taxila.com", "MALE"),
  createData("Student13", "Student Name13", "Student13@taxila.com", "MALE"),
  createData("Student14", "Student Name14", "Student14@taxila.com", "MALE"),
  createData("Student15", "Student Name15", "Student15@taxila.com", "MALE"),
  createData("Student16", "Student Name16", "Student16@taxila.com", "MALE"),
  createData("Student17", "Student Name17", "Student17@taxila.com", "MALE"),
  createData("Student18", "Student Name18", "Student18@taxila.com", "MALE"),
  createData("Student19", "Student Name19", "Student19@taxila.com", "MALE"),
  createData("Student20", "Student Name20", "Student20@taxila.com", "MALE")
];

const useStyles2 = makeStyles({
  table: {
    minWidth: 500
  }
});

export default function CustomPaginationActionsTable() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10 ));
    setPage(0);
  };


  return (
    <TableContainer component={Paper} id="table">
      <Table className={classes.table} aria-label="custom pagination table" style={{ width: 1200 }}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">Student Name</StyledTableCell>
            <StyledTableCell align="center">Email&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="center">Gender&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow>
              <TableCell component="th" scope="row" style={{ width: 160 }}  align="center">
                {row.id}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {row.email}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {row.gender}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
         
         
          </TableRow>
          
        </TableFooter>
      </Table>
      
    </TableContainer>

    
  );
}
