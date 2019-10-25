import React from "react";
import { Dropdown, Input, Radio, Checkbox } from "./fieldTypes";
import { FieldProps } from "react-final-form";
import { Errors } from "./constants";
import { DEFAULT_FIELD_STYLE } from "./constants/DefaultStyles";
import Error from "./Error";

type ValueType = boolean | number | string | (boolean | number | string)[];

type FieldTypes = "radio" | "dropdown" | "checkbox" | "text";

interface AnyObject {
  [key: string]: any;
}

export interface GenericFieldProps {
  name: string;
  fieldType?: FieldTypes;
  required?: boolean;
  readOnly?: boolean;
  labelText?: string;
  hint?: string;
}

interface GenericFormFieldProps
  extends FieldProps<ValueType, HTMLElement>,
    GenericFieldProps,
    AnyObject {}

type FieldComponent = React.FC<GenericFormFieldProps>;

const isEmpty = (value: ValueType) => {
  if (value === null || value === undefined) {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  return false;
};

const Field: FieldComponent = props => {
  const { fieldType, required, validate, labelText, hint, name } = props;
  const fieldValidate = (value, allValues) => {
    if (required && isEmpty(value)) {
      return Errors.REQUIRED;
    }
    return validate && validate(value, allValues);
  };

  let fieldComp = <Input validate={fieldValidate} {...props} />;

  switch (fieldType) {
    case "dropdown":
      fieldComp = <Dropdown validate={fieldValidate} {...props} />;
      break;
    case "radio":
      fieldComp = <Radio validate={fieldValidate} {...props} />;
      break;
    case "checkbox":
      fieldComp = <Checkbox validate={fieldValidate} {...props} />;
      break;
    case "text":
    default:
  }
  return (
    <div style={DEFAULT_FIELD_STYLE}>
      <label htmlFor={name} style={{ paddingBottom: 5 }}>
        {labelText ? labelText : name}
        {required ? " :*" : " :"}
      </label>
      {fieldComp}
      <span style={{ color: "#adadad", padding: "5px 0" }}>{hint}</span>
      <Error name={name} />
    </div>
  );
};

export default Field;
