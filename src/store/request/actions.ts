import { EventFormValues } from '../../components/EventForm';
import { Action } from '../types';
import { createAction } from '../utils';
import { SUBMIT_EVENT_FORM, SUBMIT_EVENT_FORM_SUCCESS } from './constants';

export interface SubmitEventFormPayload extends EventFormValues { }

export const submitEventForm = (
  eventFormValues: EventFormValues,
): Action<SubmitEventFormPayload> => createAction(
  SUBMIT_EVENT_FORM,
  eventFormValues,
);

export const submitEventFormSuccess = (): Action => createAction(SUBMIT_EVENT_FORM_SUCCESS);
