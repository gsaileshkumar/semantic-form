import React from "react";
import { Form, Field } from "../../src/index";
import StoryWrapper, { ValuesComponent } from "../styles";

export const SimpleForm = () => {
  const onSubmitHandler = values => {
    console.log("values", values);
  };
  return (
    <StoryWrapper>
      <Form
        onSubmit={onSubmitHandler}
        subscription={{
          values: true,
          submitting: true,
          pristine: true,
          invalid: true
        }}
        render={({ values }) => {
          return (
            <>
              <Field name="firstname" labelText="First name" required />
              <Field name="lastname" labelText="Last name" />
              <Field name="age" type="number" labelText="Age" required />
              <Field
                name="gender"
                fieldType="dropdown"
                labelText="Gender"
                options={[
                  { text: "Male", value: "male" },
                  { text: "Female", value: "female" }
                ]}
                selection
              />
              <ValuesComponent values={values} />
            </>
          );
        }}
      />
    </StoryWrapper>
  );
};

export default SimpleForm;
