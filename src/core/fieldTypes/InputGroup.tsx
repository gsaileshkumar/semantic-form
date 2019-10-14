import React from "react";
import { Input, InputProps, InputOnChangeData } from "semantic-ui-react";
import { Field } from "react-final-form";

interface InputGroupProps extends InputProps {
  name: string;
  readonly?: boolean;
}

type InputGroupType = React.FunctionComponent<InputGroupProps>;

const InputGroup: InputGroupType = ({ name, readonly, onChange, ...rest }) => {
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
