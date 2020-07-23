import React from "react";
import { Button } from "@material-ui/core";

type Props = {
  onSubmit: () => void,
  isSubmitting: boolean,
}

export function SubmitButton<TData>({onSubmit, isSubmitting}: Props) {
  return (
    <Button
      variant="contained"
      color="primary"
      disabled={isSubmitting}
      onClick={onSubmit}
      className="submitButton"
      classes={{ root: 'submitButton' }}

    >
      Submit
    </Button>
  )
}
