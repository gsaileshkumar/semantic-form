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
              <Field
                name="housename"
                required
                fieldType="dropdown"
                labelText="Which is your favorite house?"
                options={[
                  { text: "Stark", value: "stark" },
                  { text: "Lannister", value: "lannister" },
                  { text: "Baratheon", value: "baratheon" }
                ]}
                selection
              />
              <Condition when="housename" is="stark">
                <Field
                  name="favouriteChar"
                  fieldType="dropdown"
                  labelText="Who is your favourite Stark"
                  options={[
                    { text: "Arya", value: "arya" },
                    { text: "Sansa", value: "sansa" },
                    { text: "Bran", value: "bran" },
                    { text: "Rob", value: "rob" },
                    { text: "Edarrd", value: "ed" }
                  ]}
                  selection
                />
              </Condition>
              <Condition when="housename" is="lannister">
                <Field
                  name="favouriteChar"
                  fieldType="dropdown"
                  labelText="Who is your favourite Lannister"
                  options={[
                    { text: "Tyrion", value: "tyrion" },
                    { text: "Jaime", value: "jaime" },
                    { text: "Cersie", value: "cersie" }
                  ]}
                  selection
                />
              </Condition>
              <Condition when="housename" is="baratheon">
                <Field
                  name="favouriteChar"
                  fieldType="dropdown"
                  labelText="Who is your favourite Baratheon"
                  options={[
                    { text: "Robert", value: "robert" },
                    { text: "Stannis", value: "stannis" },
                    { text: "Gendry", value: "gendry" }
                  ]}
                  selection
                />
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
