import React from "react";
import { DropdownGroup, InputGroup } from "./fieldTypes";
import { FieldProps } from "react-final-form";

type FieldTypes = "dropdown" | "text";

interface AnyObject {
  [key: string]: any;
}

export interface GenericFieldProps {
  name: string;
  fieldType?: FieldTypes;
  required?: boolean;
  readOnly?: boolean;
}

interface GenericFormFieldProps
  extends FieldProps<any, HTMLElement>,
    GenericFieldProps,
    AnyObject {}

type FieldComponent = React.FC<GenericFormFieldProps>;

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
