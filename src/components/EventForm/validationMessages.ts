import { MAX_NAME_LENGTH, MIN_NAME_LENGTH } from '../../constants';

export const createNameTooShortMessage = (humanReadableFieldName: string) => `${humanReadableFieldName} should be at least ${MIN_NAME_LENGTH} characters long`;
export const createNameTooLongMessage = (humanReadableFieldName: string) => `${humanReadableFieldName} should be shorten than ${MAX_NAME_LENGTH} characters`;

export const fieldIsRequiredMessage = 'This field is required';

export const validEmailMessage = 'Please provide a valid e-mail address';
export const validDateMessage = 'Please provide a valid date';
