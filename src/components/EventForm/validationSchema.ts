import * as yup from 'yup';
import { EventFormValues } from './index';
import { MAX_NAME_LENGTH, MIN_NAME_LENGTH } from '../../constants';
import {
  createNameTooLongMessage,
  createNameTooShortMessage,
  fieldIsRequiredMessage,
  validEmailMessage,
} from './validationMessages';

const nameValidation = (humanReadableFieldName: string) => yup
  .string()
  .min(MIN_NAME_LENGTH, createNameTooShortMessage(humanReadableFieldName))
  .max(MAX_NAME_LENGTH, createNameTooLongMessage(humanReadableFieldName))
  .required(fieldIsRequiredMessage);

export const eventValidationSchema: yup.ObjectSchema = yup
  .object()
  .shape<EventFormValues>({
    firstName: nameValidation('First name'),
    lastName: nameValidation('Last name'),
    email: yup
      .string()
      .email(validEmailMessage)
      .required(fieldIsRequiredMessage),
    date: yup
      .object(),
  });
