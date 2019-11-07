import React, { ReactElement } from "react";
import { Field } from "react-final-form";
import { GenericFieldProps } from "./Field";

interface ConditionProps {
  when: string;
  children: ReactElement<GenericFieldProps> | ReactElement<GenericFieldProps>[];
  resetOnFalse?: boolean;
}

export interface ConditionTypes {
  condition?: (value: any) => boolean;
  is?: any;
}

const Condition: React.FC<ConditionProps & ConditionTypes> = ({
  children,
  condition,
  is,
  when,
  resetOnFalse = true
}) => {
  return (
    <Field name={when}>
      {({ input: { value } }) => {
        if (value === is || (condition && condition(value))) {
          return children;
        } else {
          return (
            resetOnFalse &&
            React.Children.map(children, (child: React.ReactElement) => {
              return child.props.name ? (
                <Field name={child.props.name}>
                  {({ input: { onChange } }) => {
                    onChange(undefined);
                    return null;
                  }}
                </Field>
              ) : (
                child
              );
            })
          );
        }
      }}
    </Field>
  );
};

export default Condition;
