import React from "react";
import { Field } from "react-final-form";
import { Radio, RadioProps } from "semantic-ui-react";

interface RadioGroupProps extends Omit<RadioProps, "type"> {
  direction?: "vertical" | "horizontal";
}

type RadioGroupType = React.FC<RadioGroupProps>;

const RadioField = ({ options, value, direction, ...rest }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction === "vertical" ? "column" : "row"
      }}
    >
      {options.map(option => (
        <Radio
          {...rest}
          {...option}
          style={{ ...rest.style, paddingRight: "1rem" }}
          label={option.text}
          checked={value === option.value}
        />
      ))}
    </div>
  );
};

const RadioGroup: RadioGroupType = ({
  name,
  readOnly,
  direction,
  options,
  ...rest
}) => {
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
            direction={direction}
          />
        );
      }}
    </Field>
  );
};

export default RadioGroup;
