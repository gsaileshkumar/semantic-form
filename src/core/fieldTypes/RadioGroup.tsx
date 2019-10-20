import React from "react";
import { Field } from "react-final-form";
import { Radio, RadioProps } from "semantic-ui-react";

interface RadioGroupProps extends Omit<RadioProps, "type"> {}

type RadioGroupType = React.FunctionComponent<RadioGroupProps>;

const RadioField = ({ options, value, ...rest }) => {
  return options.map(option => (
    <Radio
      {...rest}
      {...option}
      label={option.text}
      checked={value === option.value}
    />
  ));
};

const RadioGroup: RadioGroupType = ({ name, readOnly, options, ...rest }) => {
  return (
    <Field {...rest} name={name}>
      {({ input, meta, ...others }) => {
        const onChangeHandler = (
          event: React.SyntheticEvent<HTMLElement, Event>,
          data: RadioProps
        ) => {
          input.onChange(data.value);
        };
        const onFocusHandler = (
          event: React.SyntheticEvent<HTMLElement, Event>,
          data: RadioProps
        ) => {
          input.onFocus();
        };
        const onBlurHandler = (
          event: React.SyntheticEvent<HTMLElement, Event>,
          data: RadioProps
        ) => {
          input.onBlur();
        };
        return (
          <RadioField
            {...others}
            options={options}
            onFocus={onFocusHandler}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            value={input.value}
            name={input.name}
          />
        );
      }}
    </Field>
  );
};

export default RadioGroup;
