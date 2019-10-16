import React from "react";
import { DropdownGroup, InputGroup } from "./fieldTypes";
import { FieldProps } from "react-final-form";

type FieldTypes = "dropdown" | "text";

interface GenericFieldProps extends FieldProps<any, HTMLElement> {
  fieldType?: FieldTypes;
  required?: boolean;
}

type FieldComponent = React.FC<GenericFieldProps>;

const Field: FieldComponent = props => {
  const { fieldType } = props;
  switch (fieldType) {
    case "dropdown":
      return <DropdownGroup {...props} />;
    case "text":
      return <InputGroup {...props} />;
    default:
      return <InputGroup {...props} />;
  }
};

export default Field;
