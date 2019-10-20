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
  pristine: true,
  invalid: true
};

const Form = (props: FormProps) => {
  const {
    initialValues,
    render,
    children,
    subscription = DEFAULT_FORM_SUBSCRIPTION,
    onSubmit
  } = props;

  return (
    <FinalForm
      onSubmit={onSubmit}
      subscription={subscription}
      initialValues={initialValues}
      render={(renderProps: FormRenderProps) => {
        const { handleSubmit, ...rest } = renderProps;
        return (
          <>
            <form onSubmit={handleSubmit}>
              {render ? render(renderProps) : null}
              <Button
                type="submit"
                primary
                disabled={rest.submitting || rest.pristine || rest.invalid}
                style={{ marginTop: "1rem" }}
              >
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
