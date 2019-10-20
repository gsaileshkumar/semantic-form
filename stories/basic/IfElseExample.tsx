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
                name="isArya"
                required
                fieldType="radio"
                labelText="Continue your game as Arya?"
                options={[
                  { text: "Yes", value: true },
                  { text: "No", value: false }
                ]}
                selection
              />
              <IfElse
                when="isArya"
                is
                renderOnTrue={
                  <>
                    <Field
                      name="location"
                      labelText="Whom do you want to disguise?"
                    />
                  </>
                }
                renderOnFalse={
                  <>
                    <Field name="character" labelText="Continue As?" />
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
