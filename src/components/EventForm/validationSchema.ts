import * as yup from 'yup';
import { EventFormValues } from "./index";

const nameValidation = yup
  .string()
  .min(3)
  .max(30)
  .required();

export const eventValidationSchema: yup.ObjectSchema = yup
  .object()
  .shape<EventFormValues>({
    firstName: nameValidation,
    lastName: nameValidation,
    email: yup
      .string()
      .email()
      .required(),
    date: yup // todo: integrate with moment.js
      .object()
  });

