import { eventValidationSchema } from './validationSchema';
import * as fixtures from './eventFixtures';

describe('validationSchema for event form values', () => {
  const isValid = eventValidationSchema.isValid.bind(eventValidationSchema);

  it('should fail if any of the properties are missing', async () => {
    expect(await isValid(fixtures.missingDate)).toBeFalsy();
    expect(await isValid(fixtures.missingEmail)).toBeFalsy();
    expect(await isValid(fixtures.missingFirstName)).toBeFalsy();
    expect(await isValid(fixtures.missingLastName)).toBeFalsy();
  });

  it('should fail if firstName or lastName are not strings of 3-30 characters long', async () => {
    expect(await isValid(fixtures.firstNameTooLong)).toBeFalsy();
    expect(await isValid(fixtures.firstNameTooShort)).toBeFalsy();
    expect(await isValid(fixtures.lastNameTooLong)).toBeFalsy();
    expect(await isValid(fixtures.lastNameTooShort)).toBeFalsy();
  });

  it('should fail for each invalid name format', async () => {
    for (const allValidExceptNames of fixtures.allValidExceptNamesFixtures) {
      expect(await isValid(allValidExceptNames)).toBeFalsy();
    }
  });

  it('should fail if email is not valid', async () => {
    expect(await isValid(fixtures.allValidExceptEmail)).toBeFalsy();
  });

  it('should fail if date is not in a valid format', async () => {
    expect(await isValid(fixtures.allValidExceptDate)).toBeFalsy();
  });

  it('should succeed otherwise', async () => {
    const validationResult = await isValid(fixtures.validEventFixture);

    expect(validationResult).toBeTruthy();
  });
});
