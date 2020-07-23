import React from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';

type Props = {
  name: string;
  label: string;
}

export const NameInput: React.FC<Props> = ({ name, label }: Props) => (
  <Field
    component={TextField}
    type="text"
    name={name}
    label={label}
  />
);
