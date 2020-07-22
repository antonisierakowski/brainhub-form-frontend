import React from "react";
import moment from 'moment';
import { Field, Form, Formik } from "formik";
import { eventValidationSchema } from "./validationSchema";
import { TextField } from "formik-material-ui";
import { Button } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import { DatePicker } from "formik-material-ui-pickers";

export interface EventFormValues {
  firstName: string,
  lastName: string,
  email: string,
  date: moment.Moment,
}

const eventFormInitialValues: EventFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  date: moment(),
}

export const EventForm: React.FC = () => {

  return (
    <Formik<EventFormValues>
      validationSchema={eventValidationSchema}
      initialValues={eventFormInitialValues}
      onSubmit={console.log}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field
            component={TextField}
            name="firstName"
            type="text"
            label="First name"
          />
          <Field
            component={TextField}
            name="lastName"
            type="text"
            label="Last name"
          />
          <Field
            component={TextField}
            name="email"
            type="email"
            label="Email"
          />
          <Field
            component={DatePicker}
            name="date"
            label="Event Date"
            disablePast={true}
          />
          {isSubmitting && <LinearProgress />}
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}
