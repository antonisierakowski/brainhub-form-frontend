import React from 'react';
import moment from 'moment';
import { Form, Formik } from 'formik';
import { eventValidationSchema } from './validationSchema';
import './styles.css';
import { NameInput } from './NameInput';
import { EmailInput } from './EmailInput';
import { DateInputWithPicker } from './DateInputWithPicker';
import { SubmitButton } from './SubmitButton';
import { ProgressIndicator } from './ProgressIndicator';
import { FormHeader } from './FormHeader';
import { useFormSubmit } from './hook';
import { submitEventForm } from '../../store/request/actions';

export interface EventFormValues {
  firstName: string;
  lastName: string;
  email: string;
  date: moment.Moment;
}

const eventFormInitialValues: EventFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  date: moment(),
};

export const EventForm: React.FC = () => {
  const onFormSubmit = useFormSubmit(submitEventForm);

  return (
    <Formik<EventFormValues>
      validationSchema={eventValidationSchema}
      initialValues={eventFormInitialValues}
      onSubmit={onFormSubmit}
    >
      {({ submitForm, isSubmitting }) => (
        <Form className="eventForm">
          <FormHeader />
          <NameInput label="First name" name="firstName" />
          <NameInput label="Last name" name="lastName" />
          <EmailInput name="email" label="Email" />
          <DateInputWithPicker name="date" label="Event Date" />
          <ProgressIndicator isActive={isSubmitting} />
          <SubmitButton onSubmit={submitForm} isSubmitting={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};
