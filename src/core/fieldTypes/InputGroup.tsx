import React from "react";
import { Input, InputProps, InputOnChangeData } from "semantic-ui-react";
import { Field } from "react-final-form";
import { GenericFieldProps } from "../Field";

interface InputGroupProps extends GenericFieldProps, InputProps {}

type InputGroupType = React.FunctionComponent<InputGroupProps>;

const InputGroup: InputGroupType = ({ name, readOnly, onChange, ...rest }) => {
  return (
    <Field {...rest} name={name}>
      {({ input, meta }) => {
        const onChangeHandler = (
          e: React.ChangeEvent<HTMLInputElement>,
          data: InputOnChangeData
        ) => {
          input.onChange(data.value);
        };
        return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor={name}>{name}</label>
            <Input {...rest} {...input} onChange={onChangeHandler} />
          </div>
        );
      }}
    </Field>
  );
};

export default InputGroup;
