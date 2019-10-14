import React, { ReactNode } from "react";
import { Field } from "react-final-form";

interface IfElseProps {
  when: string;
  renderOnTrue?: ReactNode;
  renderOnFalse?: ReactNode;
}

interface ConditionTypes {
  condition?: (value: any) => Boolean;
  is?: any;
}

type Props = IfElseProps & ConditionTypes;

interface IfElseConditionFC extends React.FC<Props> {}

const IfElseConditionFC: IfElseConditionFC = ({
  when,
  condition,
  is,
  renderOnFalse,
  renderOnTrue
}) => {
  return (
    <Field name={when}>
      {({ input: { value } }) => {
        if (value === is || (condition && condition(value))) {
          return renderOnTrue;
        } else {
          return renderOnFalse ? renderOnFalse : null;
        }
      }}
    </Field>
  );
};

export default IfElseConditionFC;
