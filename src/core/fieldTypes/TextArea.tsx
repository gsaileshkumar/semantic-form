import React from "react";
import { TextArea, TextAreaProps } from "semantic-ui-react";
import { Field } from "react-final-form";

interface TextAreaGroupProps extends Omit<TextAreaProps, "value"> {}

type TextAreaGroupType = React.FC<TextAreaGroupProps>;

const TextAreaGroup: TextAreaGroupType = ({ name, ...rest }) => {
  return (
    <Field {...rest} name={name}>
      {({ input, meta, ...others }) => {
        const onChangeHandler = (
          event: React.FormEvent<HTMLTextAreaElement>,
          data: TextAreaProps
        ) => {
          input.onChange(data.value);
        };
        return (
          <TextArea
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

export default TextAreaGroup;
