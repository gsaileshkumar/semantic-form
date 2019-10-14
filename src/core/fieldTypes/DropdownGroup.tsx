import React from "react";
import { Dropdown, DropdownProps } from "semantic-ui-react";
import { Field } from "react-final-form";

interface DropdownGroupProps extends DropdownProps {
  name: string;
  readonly?: boolean;
}

type DropdownGroupType = React.FunctionComponent<DropdownGroupProps>;

const DropdownGroup: DropdownGroupType = ({
  name,
  readonly,
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
          <Dropdown
            onFocus={onFocusHandler}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            value={input.value}
            name={input.name}
            {...rest}
          />
        );
      }}
    </Field>
  );
};

export default DropdownGroup;
