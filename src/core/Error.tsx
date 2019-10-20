import React from "react";
import { Field } from "react-final-form";

interface ErrorProps {
  name: string;
}

type ErrorComp = React.FC<ErrorProps>;

const Error: ErrorComp = ({ name }) => {
  return (
    <Field name={name}>
      {({ meta }) => {
        const { touched, error } = meta;
        return <span style={{ color: "#c14545" }}>{touched && error}</span>;
      }}
    </Field>
  );
};

export default Error;
