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
              <Field
                name="firstname"
                labelText="First name"
                required
                hint="Required"
              />
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
              <Field
                name="citizen"
                fieldType="radio"
                labelText="Are you a citizen?"
                options={[
                  { text: "Yes", value: true },
                  { text: "No", value: false }
                ]}
              />
              <Field
                name="preferredLocation"
                fieldType="checkbox"
                labelText="Preferred Location"
                options={[
                  { text: "Singapore", value: "sg" },
                  { text: "India", value: "in" },
                  { text: "United States", value: "us" }
                ]}
                selection
              />
              <Field
                name="address"
                required
                labelText="Address"
                fieldType="textarea"
                hint="Please include pincode"
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
