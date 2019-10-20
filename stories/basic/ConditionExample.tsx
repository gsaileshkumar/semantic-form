import React from "react";
import { Form, Field, Condition } from "../../src/index";
import StoryWrapper, { ValuesComponent } from "../styles";

export const ConditionExample = () => {
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
              <Field name="fullname" labelText="Full name" required />
              <Field
                name="age"
                type="number"
                labelText="Age"
                required
                hint="Driving license required for adults (age > 18)"
              />
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
              <Condition when="age" condition={value => value > 18}>
                <Field name="licenseNo" labelText="Driving license Number" />
              </Condition>
              <ValuesComponent values={values} />
            </>
          );
        }}
      />
    </StoryWrapper>
  );
};

export default ConditionExample;
