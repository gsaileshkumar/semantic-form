import React from "react";
import { Form, Field, IfElse } from "../../src/index";
import StoryWrapper, { ValuesComponent } from "../styles";

export const IfElseExample = () => {
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
                name="hasAccount"
                required
                fieldType="radio"
                labelText="Already have account?"
                options={[
                  { text: "Yes", value: true },
                  { text: "No", value: false }
                ]}
                selection
              />
              <IfElse
                when="hasAccount"
                is
                renderOnTrue={
                  <>
                    <h2>Login here</h2>
                    <Field name="username" labelText="Username" />
                    <Field
                      name="password"
                      labelText="Password"
                      type="password"
                    />
                  </>
                }
                renderOnFalse={
                  <>
                    <h2>Signup here</h2>
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
                  </>
                }
              />
              <ValuesComponent values={values} />
            </>
          );
        }}
      />
    </StoryWrapper>
  );
};

export default IfElseExample;
