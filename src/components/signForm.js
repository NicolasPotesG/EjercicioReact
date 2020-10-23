import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useForm from "../customHooks/useForm";
import validateForm from "../utils/validateForm";

const SignForm = (props) => {
  const { handleChange, handleSubmit, errors } = useForm(
    validateForm,
    props.data
  );

  let formFields = [];
  props.data.map((item, i) => {
    formFields.push(
      <Form.Group key={i}>
        <Form.Label htmlFor={item.name}>{item.placeholder}</Form.Label>
        <Form.Control
          onChange={handleChange}
          name={item.name}
          type={item.type}
          placeholder={item.placeholder}
        ></Form.Control>
        {errors[item.name] && <p>{errors[item.name]}</p>}
      </Form.Group>
    );
  });

  return (
    <div className="container">
      <h1 className="text-center">Form</h1>
      <Form onSubmit={handleSubmit}>
        {formFields}
        <Button className="but-centered" variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default SignForm;
