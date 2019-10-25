import React, { useState, useEffect } from "react";
import { Field } from "react-final-form";
import { Checkbox, CheckboxProps } from "semantic-ui-react";

interface CheckboxGroupProps extends Omit<CheckboxProps, "type"> {
  direction?: "vertical" | "horizontal";
}

type CheckboxFieldType = React.FunctionComponent<CheckboxGroupProps>;

const CheckboxField: CheckboxFieldType = ({
  options,
  value = [],
  onChange,
  direction,
  ...rest
}) => {
  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(() => {
    if (onChange) {
      onChange(selectedValue);
    }
  }, [selectedValue]);

  const onChangeHandler = (
    event: React.FormEvent<HTMLInputElement>,
    data: CheckboxProps
  ) => {
    if (value.includes(data.value)) {
      setSelectedValue(
        value.filter(checkboxValue => data.value !== checkboxValue)
      );
    } else {
      setSelectedValue([...value, data.value]);
    }
  };

  console.log("value", value);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction === "vertical" ? "column" : "row"
      }}
    >
      {options.map(option => (
        <Checkbox
          {...rest}
          {...option}
          onChange={onChangeHandler}
          style={{ ...rest.style, paddingRight: "1rem" }}
          label={option.text}
          checked={value.includes(option.value)}
        />
      ))}
    </div>
  );
};

const CheckboxGroup: CheckboxFieldType = ({
  name,
  direction,
  options,
  ...rest
}) => {
  return (
    <Field {...rest} name={name}>
      {({ input, meta, ...others }) => {
        const onChangeHandler = (value: Array<any>) => {
          if (value.length) {
            input.onChange(value);
          } else {
            input.onChange(undefined);
          }
        };
        const onFocusHandler = (
          event: React.SyntheticEvent<HTMLElement, Event>,
          data: CheckboxProps
        ) => {
          input.onFocus();
        };
        const onBlurHandler = (
          event: React.SyntheticEvent<HTMLElement, Event>,
          data: CheckboxProps
        ) => {
          input.onBlur();
        };
        console.log("input valur", input.value);
        return (
          <CheckboxField
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

export default CheckboxGroup;
