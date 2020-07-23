import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { FormikHelpers } from "formik";
import { Action } from "../../store/types";

type OnFormSubmit<TValues> = (values: TValues, formikHelpers: FormikHelpers<TValues>) => void

type ActionCreator<TValues> = (values: TValues) => Action<TValues>

export function useFormSubmit<TValues>(actionCreator: ActionCreator<TValues>): OnFormSubmit<TValues> {
  const dispatch = useDispatch()

  const onFormSubmit = useCallback((values: TValues, formikHelpers: FormikHelpers<TValues>) => (
    dispatch(
      actionCreator(values),
    )
  ), [dispatch, actionCreator])

  return onFormSubmit
}
