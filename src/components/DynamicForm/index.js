import React, { Component } from "react";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

import ReactDOM from "react-dom";
import "./form.css";
import { ButtonGroup, TextareaAutosize } from "@material-ui/core";
import { Label } from "@material-ui/icons";

export default class DynamicForm extends Component {
  state = {};
  constructor(props) {
    super(props);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("gds:p:s", nextProps.defaultValues, prevState);

    let derivedState = {};

    if (
      nextProps.defaultValues &&
      nextProps.defaultValues.id !== prevState.id
    ) {
      //   Object.keys(prevState).forEach(k => {
      //     derivedState[k] = "";
      //   });
      return {
        ...nextProps.defaultValues
      };
    }

    console.log("no state change");
    return null;
  }

  onSubmit = e => {
    e.preventDefault();
    if (this.props.onSubmit) this.props.onSubmit(this.state);
  };

  onChange = (e, key, type = "single") => {
    //console.log(`${key} changed ${e.target.value} type ${type}`);
    if (type === "single") {
      this.setState(
        {
          [key]: e.target.value
        },
        () => { }
      );
    } else {
      // Array of values (e.g. checkbox): TODO: Optimization needed.
      let found = this.state[key]
        ? this.state[key].find(d => d === e.target.value)
        : false;

      if (found) {
        let data = this.state[key].filter(d => {
          return d !== found;
        });
        this.setState({
          [key]: data
        });
      } else {
        console.log("found", key, this.state[key]);
        // this.setState({
        //   [key]: [e.target.value, ...this.state[key]]
        // });
        let others = this.state[key] ? [...this.state[key]] : [];
        this.setState({
          [key]: [e.target.value, ...others]
        });
      }
    }
  };

  renderForm = () => {
    let model = this.props.model;
    let defaultValues = this.props.defaultValues;

    let formUI = model.map(m => {
      let key = m.key;
      let type = m.type || "text";
      let props = m.props || {};
      let name = m.name;
      let value = m.value;
      let label = m.label || m.name;

      let target = key;
      value = this.state[target] || "";

      let input = (
        <TextField
          {...props}
          className="form-input"
          type={type}
          key={key}
          name={name}
          value={value}
          onChange={e => {
            this.onChange(e, target);
          }}
        />
      );

      if (type == "file") {
        return (
          <TextField
            {...props}
            className="form-input"
            type={type}
            key={key}
            name={name}
            value={value}
            onChange={e => {
              this.onChange(e, target);
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        )
      }

      if (type == "datetime-local") {
        const today = new Date()
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)
        return (

          <TextField
            {...props}
            id="datetime-local"
            key={key}
            label={label}
            type={type}
            defaultValue={tomorrow.toDateString()}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={e => {
              this.onChange(e, target);
            }}
          />
        )
      }

      if (type == "radio") {
        input = m.options.map(o => {
          let checked = o.value == value;
          return (
            <React.Fragment key={"fr" + o.key}>
              <input
                {...props}
                className="form-input"
                type={type}
                key={o.key}
                name={o.name}
                checked={checked}
                value={o.value}
                onChange={e => {
                  this.onChange(e, o.name);
                }}
              />
              <label key={"ll" + o.key}>{o.label}</label>
            </React.Fragment>
          );
        });
        input = <div className="form-group-radio">{input}</div>;
      }

      if (type == "select") {
        input = m.options.map(o => {
          let checked = o.value == value;
          //console.log("select: ", o.value, value);
          return (
            <option
              {...props}
              className="form-input"
              key={o.key}
              value={o.value}
            >
              {o.value}
            </option>
          );
        });

        //console.log("Select default: ", value);
        input = (
          <select
            value={value}
            onChange={e => {
              this.onChange(e, m.key);
            }}
          >
            {input}
          </select>
        );
      }

      if (type == "checkbox") {
        input = m.options.map(o => {
          //let checked = o.value == value;
          let checked = false;
          if (value && value.length > 0) {
            checked = value.indexOf(o.value) > -1 ? true : false;
          }
          //console.log("Checkbox: ", checked);
          return (
            <React.Fragment key={"cfr" + o.key}>
              <input
                {...props}
                className="form-input"
                type={type}
                key={o.key}
                name={o.name}
                checked={checked}
                value={o.value}
                onChange={e => {
                  this.onChange(e, m.key, "multiple");
                }}
              />
              <label key={"ll" + o.key}>{o.label}</label>
            </React.Fragment>
          );
        });

        input = <div className="form-group-checkbox">{input}</div>;
      }

      return (
        <div key={"g" + key} className="form-group">
          <label className="form-label" key={"l" + key} htmlFor={key}>
            {m.label}
          </label>
          {input}
        </div>
      );
    });
    return formUI;
  };

  render() {
    // let title = this.props.title || "Dynamic Form";

    return (
      <div className={this.props.className}>
        {/* <h3 className="form-title">{title}</h3> */}
        <form
          className="dynamic-form"
          onSubmit={e => {
            this.onSubmit(e);
          }}
        >
          {this.renderForm()}
          <div className="form-actions">
          <ButtonGroup color="primary" aria-label="outlined primary button group" variant="contained">
            <Button type="submit">Submit</Button>
            <Button href='/lmsDashBoard' type="cancel" id="cancelButton">Cancel</Button>
            </ButtonGroup>
          </div>
        </form>
      </div>
    );
  }
}
