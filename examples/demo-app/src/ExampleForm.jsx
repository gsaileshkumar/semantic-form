import React from "react";
import { Form } from "react-final-form";
import { Field, Condition, IfElse } from "semantic-form";
import "semantic-ui-css/semantic.min.css";

const onSubmitHandler = values => alert(JSON.stringify(values, null, 2));

const ExampleForm = () => {
  return (
    <div style={{ width: "500px", margin: "0 auto" }}>
      <Form
        initialValues={{
          firstname: "sailesh",
          lastname: "kumar",
          age: 25,
          gender: "male"
        }}
        onSubmit={onSubmitHandler}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit} autoComplete="off">
              <Field fieldType="text" name="firstname" />
              <Field fieldType="text" name="lastname" />
              <Field name="age" />
              <Field
                fieldType="dropdown"
                name="gender"
                selection
                options={[
                  { text: "Male", value: "male" },
                  { text: "Female", value: "female" }
                ]}
              />
              <Condition when="firstname" is="sai">
                <Field name="hobby" />
              </Condition>
              {/* <IfElseCondition
                when="age"
                condition={value => value > 18}
                renderOnTrue={<InputGroup name="liscenceNumber" />}
                renderOnFalse={<InputGroup name="schoolname" />}
              /> */}
              <IfElse
                when="age"
                condition={value => value > 18}
                renderOnTrue={<Field name="liscenceNumber" />}
                renderOnFalse={<Field name="schoolname" />}
              />
              {/* <IfElseCondition when="age" condition={value => value > 18}>
                <IfElseCondition.If content="asd">he</IfElseCondition.If>
              </IfElseCondition> */}

              <input type="submit" />
            </form>
          );
        }}
      />
    </div>
  );
};

export default ExampleForm;
