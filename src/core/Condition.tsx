import React, { ReactElement } from "react";
import { Field } from "react-final-form";

interface ConditionProps {
  when: string;
  children: ReactElement;
}

export interface ConditionTypes {
  condition?: (value: any) => Boolean;
  is?: any;
}

const Condition: React.FC<ConditionProps & ConditionTypes> = ({
  children,
  condition,
  is,
  when
}) => {
  return (
    <Field name={when}>
      {({ input: { value } }) => {
        if (value === is || (condition && condition(value))) {
          return children;
        } else {
          return React.Children.map(children, (child: React.ReactElement) => {
            return (
              <Field name={child.props.name}>
                {({ input: { onChange } }) => {
                  onChange(undefined);
                  return null;
                }}
              </Field>
            );
          });
        }
      }}
    </Field>
  );
};

export default Condition;
