import { useState } from "react";

const useForm = (validateForm, formFields) => {
  let obj = {};

  formFields.map((item, i) => {
    obj[item.name] = "";
  });

  const [errors, setErrors] = useState({});

  const [values, setValues] = useState(obj);
  const handleChange = (evt) => {
    setValues({
      //Se hace una copia de los valores que están
      ...values,
      //Se asignan los valores por cada campo
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setErrors(validateForm(values, formFields));
  };

  return { handleChange, handleSubmit, errors };
};

export default useForm;
