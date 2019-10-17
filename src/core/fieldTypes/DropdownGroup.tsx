import React from "react";
import { Dropdown, DropdownProps } from "semantic-ui-react";
import { Field } from "react-final-form";
import { GenericFieldProps } from "../Field";

interface DropdownGroupProps extends GenericFieldProps, DropdownProps {}

type DropdownGroupType = React.FunctionComponent<DropdownGroupProps>;

const DropdownGroup: DropdownGroupType = ({
  name,
  readOnly,
  onChange,
  ...rest
}) => {
  return (
    <Field {...rest} name={name}>
      {({ input, meta }) => {
        const onChangeHandler = (
          event: React.SyntheticEvent<HTMLElement, Event>,
          data: DropdownProps
        ) => {
          input.onChange(data.value);
        };
        const onFocusHandler = (
          event: React.SyntheticEvent<HTMLElement, Event>,
          data: DropdownProps
        ) => {
          input.onFocus();
        };
        const onBlurHandler = (
          event: React.SyntheticEvent<HTMLElement, Event>,
          data: DropdownProps
        ) => {
          input.onBlur();
        };
        return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor={name}>{name}</label>
            <Dropdown
              onFocus={onFocusHandler}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
              value={input.value}
              name={input.name}
              {...rest}
            />
          </div>
        );
      }}
    </Field>
  );
};

export default DropdownGroup;
