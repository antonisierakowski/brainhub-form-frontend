import React from 'react';
import { Field } from 'formik';
import { DatePicker } from 'formik-material-ui-pickers';

type Props = {
  name: string,
  label: string,
}

export const DateInputWithPicker: React.FC<Props> = ({ name, label }: Props): React.ReactElement => (
  <Field
    component={DatePicker}
    name={name}
    label={label}
    disablePast={true}
  />
);
