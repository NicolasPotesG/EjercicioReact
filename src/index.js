import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import SignForm from "./components/signForm";

//Se declaran los objetos que serán pasados por parámetro
const data = [
  {
    name: "Username",
    type: "text",
    placeholder: "Username",
    lengthMin: 8,
    lengthMax: 30,
  },
  {
    name: "Email",
    type: "email",
    placeholder: "Email",
    lengthMin: 8,
    lengthMax: 30,
  },
  {
    name: "Password",
    type: "password",
    placeholder: "Password",
    lengthMin: 8,
    lengthMax: 30,
  },
  {
    name: "ConfirmPassword",
    type: "password",
    placeholder: "Confirm password",
    lengthMin: 8,
    lengthMax: 30,
  },
];

//
ReactDOM.render(<SignForm data={data} />, document.getElementById("root"));
