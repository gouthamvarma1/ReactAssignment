import { render, screen } from '@testing-library/react';
import App from './App';

test('Unit Test case1', () => {
  render(<App />);
  const linkElement = screen.getByText(/Taxila Public School Learning Management System/);
  expect(linkElement).toBeInTheDocument();
}

);


//verify Email Address 
test('Unit Test case2', () => {
  render(<App />);
  const linkElement = screen.getByText(/Email address/);
  expect(linkElement).toBeInTheDocument();
}

);


//verify Registration
test('Unit Test case3', () => {
  render(<App />);
  const linkElement = screen.getByText(/Registration/);
  expect(linkElement).toBeInTheDocument();
}

);



//verify birthdate 
test('Unit Test case4', () => {
  render(<App />);
  const linkElement = screen.getByText(/Birthday/);
  expect(linkElement).toBeInTheDocument();
}

);


//verify reenterPassword 
test('Unit Test case5', () => {
  render(<App />);
  const linkElement = screen.getByText(/Re-enter Password/);
  expect(linkElement).toBeInTheDocument();
}

);

