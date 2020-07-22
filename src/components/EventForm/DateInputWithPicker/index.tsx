import React from "react";
import { Field } from "formik";
import { DatePicker } from "formik-material-ui-pickers";

type Props = {
  name: string,
  label: string,
}

export const DateInputWithPicker: React.FC<Props> = ({name, label}: Props) => (
  <Field
    component={DatePicker}
    name="date"
    label="Event Date"
    disablePast={true}
  />
)
