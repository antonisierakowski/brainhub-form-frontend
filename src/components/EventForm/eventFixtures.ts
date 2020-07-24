import moment from 'moment';
import { EventFormValues } from './index';

export const thirtyOneCharacters = '1234567890123456789012345678901';
export const nameValid = 'tester';
export const nameTooShort = 'te';
export const nameTooLong = thirtyOneCharacters;
export const emailValid = 'tester@test.com';
export const emailInvalid = 'inv@lid';
export const exampleDateAsString = '12-12-2222';
export const dateValid = moment(exampleDateAsString);
export const dateInvalid = '12.12.12';
export const validEventFixture: EventFormValues = {
  date: dateValid,
  email: emailValid,
  firstName: nameValid,
  lastName: nameValid,
};
export const missingFirstName: Partial<EventFormValues> = {
  date: dateValid,
  email: emailValid,
  lastName: nameValid,
};
export const missingLastName: Partial<EventFormValues> = {
  date: dateValid,
  email: emailValid,
  firstName: nameValid,
};
export const missingEmail: Partial<EventFormValues> = {
  date: dateValid,
  lastName: nameValid,
  firstName: nameValid,
};
export const missingDate: Partial<EventFormValues> = {
  email: emailValid,
  firstName: nameValid,
  lastName: nameValid,
};
export const firstNameTooShort: EventFormValues = {
  ...validEventFixture,
  firstName: nameTooShort,
};
export const firstNameTooLong: EventFormValues = {
  ...validEventFixture,
  firstName: nameTooLong,
};
export const lastNameTooShort: EventFormValues = {
  ...validEventFixture,
  lastName: nameTooShort,
};
export const lastNameTooLong: EventFormValues = {
  ...validEventFixture,
  lastName: nameTooLong,
};
export const allValidExceptEmail: EventFormValues = {
  ...validEventFixture,
  email: emailInvalid,
};
export const allValidExceptDate = {
  ...validEventFixture,
  date: dateInvalid,
};
