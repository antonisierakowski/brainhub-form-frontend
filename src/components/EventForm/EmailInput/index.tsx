import React from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";

type Props = {
  name: string,
  label: string,
}

export const EmailInput: React.FC<Props> = ({name, label}: Props) => (
  <Field
    component={TextField}
    type="email"
    name={name}
    label={label}
  />
)
