# semantic-form

[![Build Status](https://travis-ci.org/gsaileshkumar/semantic-form.svg?branch=master)](https://travis-ci.org/gsaileshkumar/semantic-form) [![npm](https://img.shields.io/npm/v/semantic-form)](https://www.npmjs.com/package/semantic-form) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/semantic-form)](https://www.npmjs.com/package/semantic-form) [![npm type definitions](https://img.shields.io/npm/types/semantic-form)](https://www.npmjs.com/package/semantic-form) [![NPM](https://img.shields.io/npm/l/semantic-form)](https://www.npmjs.com/package/semantic-form)

A declarative form builder api for react apps using the power of [React Final form](https://github.com/final-form/react-final-form).

This library uses [Semantic UI React](https://react.semantic-ui.com/) as the form components supplier.

See [semantic-form](https://gsaileshkumar.github.io/semantic-form) for live examples.

# Installation and usage

The easiest way to use semantic-form is to install it from npm and build it into your app with bundler of your choice.

```
// Install peer dependencies first,
npm i final-form react-final-form semantic-ui-react

npm i semantic-form
```

Then use to build Forms like

```js
import React from "react";
import { Form, Field, Condition } from "semantic-form";

const SimpleForm = () => {
  const onSubmitHandler = values => {
    console.log("values", values);
  };
  return (
    <Form
      onSubmit={onSubmitHandler}
      render={() => {
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
          </>
        );
      }}
    />
  );
};
```

## Props

Since semantic-form is built using the base components from Semantic UI React, it is powered with all the features that Semantic UI React provides.

Props you may want to specify include:

#### Field

- `required` - Checks the field for mandatory
- `fieldType` - Type of the field.
- `labelText` - Label for the field
- `hint` - Hint text for the field

#### Condition

- `when` - Name of the field to be checked for
- `is` - Value to compare with
- `condition` - A callback to check for the condition on which the children is rendered

#### IfElse

- `when` - Name of the field to be checked for
- `is` - Value to compare with
- `condition` - A callback to check for the condition on which the children is rendered
- `renderOnTrue` - JSX to be rendered if the condition is satisfied
- `renderOnFalse` - JSX to be rendered if the condition is NOT satisfied

WORK IN PROGRESS
