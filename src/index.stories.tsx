import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Form, Field } from "./index";

export const SimpleForm = () => {
  const onSubmitHandler = values => {
    console.log("values", values);
  };
  return (
    <Form
      onSubmit={onSubmitHandler}
      render={({ submitting }) => {
        return (
          <>
            <Field name="firstname" />
            <Field name="lastname" />
            <Field name="age" type="number" />
            <Field
              name="gender"
              fieldType="dropdown"
              options={[
                { text: "Male", value: "male" },
                { text: "Female", value: "female" }
              ]}
              selection
            />
          </>
        );
      }}
    />
  );
};

export default { title: "Examples" };
