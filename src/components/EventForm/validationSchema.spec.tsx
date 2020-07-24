import { eventValidationSchema } from './validationSchema';
import { EventFormValues } from './index';
import moment from 'moment';

const thirtyOneCharacters = '1234567890123456789012345678901';
const nameValid = 'tester';
const nameTooShort = 'te';
const nameTooLong = thirtyOneCharacters;
const emailValid = 'tester@test.com';
const emailInvalid = 'inv@lid';
export const exampleDateAsString = '12-12-2222';
const dateValid = moment(exampleDateAsString);
const dateInvalid = '12.12.12';
export const validEventFixture: EventFormValues = {
  date: dateValid,
  email: emailValid,
  firstName: nameValid,
  lastName: nameValid,
};
const missingFirstName: Partial<EventFormValues> = {
  date: dateValid,
  email: emailValid,
  lastName: nameValid,
};
const missingLastName: Partial<EventFormValues> = {
  date: dateValid,
  email: emailValid,
  firstName: nameValid,
};
const missingEmail: Partial<EventFormValues> = {
  date: dateValid,
  lastName: nameValid,
  firstName: nameValid,
};
const missingDate: Partial<EventFormValues> = {
  email: emailValid,
  firstName: nameValid,
  lastName: nameValid,
};
const firstNameTooShort: EventFormValues = {
  ...validEventFixture,
  firstName: nameTooShort,
};
const firstNameTooLong: EventFormValues = {
  ...validEventFixture,
  firstName: nameTooLong,
};
const lastNameTooShort: EventFormValues = {
  ...validEventFixture,
  lastName: nameTooShort,
};
const lastNameTooLong: EventFormValues = {
  ...validEventFixture,
  lastName: nameTooLong,
};
const allValidExceptEmail: EventFormValues = {
  ...validEventFixture,
  email: emailInvalid,
};
const allValidExceptDate = {
  ...validEventFixture,
  date: dateInvalid,
};

describe('validationSchema for event form values', () => {
  const isValid = eventValidationSchema.isValid.bind(eventValidationSchema);

  it('should fail if any of the properties are missing', async () => {
    expect(await isValid(missingDate)).toBeFalsy();
    expect(await isValid(missingEmail)).toBeFalsy();
    expect(await isValid(missingFirstName)).toBeFalsy();
    expect(await isValid(missingLastName)).toBeFalsy();
  });

  it('should fail if firstName or lastName are not strings of 3-30 characters long', async () => {
    expect(await isValid(firstNameTooLong)).toBeFalsy();
    expect(await isValid(firstNameTooShort)).toBeFalsy();
    expect(await isValid(lastNameTooLong)).toBeFalsy();
    expect(await isValid(lastNameTooShort)).toBeFalsy();
  });

  it('should fail if email is not valid', async () => {
    expect(await isValid(allValidExceptEmail)).toBeFalsy();
  });

  it('should fail if date is not in a valid format', async () => {
    expect(await isValid(allValidExceptDate)).toBeFalsy();
  });

  it('should succeed otherwise', async () => {
    const validationResult = await isValid(validEventFixture);

    expect(validationResult).toBeTruthy();
  });
});
