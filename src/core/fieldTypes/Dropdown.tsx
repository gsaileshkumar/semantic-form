import React from "react";
import { Field } from "react-final-form";
import { Dropdown, DropdownProps } from "semantic-ui-react";

interface DropdownGroupProps extends DropdownProps {}

type DropdownGroupType = React.FunctionComponent<DropdownGroupProps>;

const DropdownGroup: DropdownGroupType = ({
  name,
  readOnly,
  onChange,
  ...rest
}) => {
  return (
    <Field {...rest} name={name}>
      {({ input, meta, ...others }) => {
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
          <Dropdown
            {...others}
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

export default DropdownGroup;
