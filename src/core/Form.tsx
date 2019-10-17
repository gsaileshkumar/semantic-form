import React from "react";
import {
  Form as FinalForm,
  FormProps,
  FormRenderProps
} from "react-final-form";
import { Subscription } from "final-form";
import { Button } from "semantic-ui-react";

const DEFAULT_FORM_SUBSCRIPTION: Subscription = {
  submitting: true,
  pristine: true
};

const Form = (props: FormProps) => {
  const { initialValues, render, children, onSubmit } = props;

  return (
    <FinalForm
      onSubmit={onSubmit}
      subscription={DEFAULT_FORM_SUBSCRIPTION}
      initialValues={initialValues}
      render={(renderProps: FormRenderProps) => {
        const { handleSubmit, submitting } = renderProps;
        return (
          <>
            <form onSubmit={handleSubmit}>
              {render ? render(renderProps) : null}
              <Button type="submit" primary disabled={submitting}>
                Submit
              </Button>
            </form>
          </>
        );
      }}
    >
      {children}
    </FinalForm>
  );
};

export default Form;
