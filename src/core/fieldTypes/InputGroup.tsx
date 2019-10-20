import React from "react";
import { Input, InputProps, InputOnChangeData } from "semantic-ui-react";
import { Field } from "react-final-form";

interface InputGroupProps extends InputProps {}

type InputGroupType = React.FunctionComponent<InputGroupProps>;

const InputGroup: InputGroupType = ({ name, readOnly, onChange, ...rest }) => {
  return (
    <Field {...rest} name={name}>
      {({ input, meta, ...others }) => {
        const onChangeHandler = (
          e: React.ChangeEvent<HTMLInputElement>,
          data: InputOnChangeData
        ) => {
          input.onChange(data.value);
        };
        return (
          <Input
            {...others}
            {...input}
            onChange={onChangeHandler}
            required={undefined}
          />
        );
      }}
    </Field>
  );
};

export default InputGroup;
