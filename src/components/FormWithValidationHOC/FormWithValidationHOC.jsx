import { useState } from "react";

const formWithValidationHOC = (WrappedComponent) => {
  const formWithValidationHOC = (props) => {
    const { errors, setErrors } = useState({});

    function validateForm() {
      const newErrors = {};

      if (!props.formData.nombre) {
        newErrors.nombre = "Name Required";
      }

      if (!props.formData.email) {
        newErrors.email = "Name Required";
      }
      setErrors(newErrors);
    }

    return (
      <WrappedComponent
        {...props}
        errors={errors}
        validateForm={validateForm}
      />
    );
  };
  return formWithValidationHOC;
};
