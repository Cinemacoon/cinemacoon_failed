// alert-template.js file

import React from "react";

import { transitions, positions, Provider as AlertProvider } from "react-alert";

const AlertTemplate = ({ style, options, message, close }) => (
    <div style={style}>
      {options.type === 'info' && '!'}
      {options.type === 'success' && ':)'}
      {options.type === 'error' && ':('}
      {message}
    </div>
  )

// this component serves as the container
// that holds/displays the error messages due to the validation
// script that runs on all the app components that have an
// input field
const Message = ({ children }) => {
  const options = {
    position: positions.TOP_RIGHT,
    timeout: 3500,
    offset: "0px",
    transition: transitions.SCALE,
  };

  return (
    <AlertProvider template={AlertTemplate} {...options}>
      {children}
    </AlertProvider>
  );
};

export default Message;