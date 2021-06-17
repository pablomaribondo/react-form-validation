/* global Form: readonly */
import { useState, useCallback, ChangeEvent } from 'react';

interface FormHook {
  formData: Form;
  errors: { [key: string]: string };
  changeHandler: (
    event: ChangeEvent<
      HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement
    >
  ) => void;
  setErrors: (errors: { [key: string]: string }) => void;
}

const useForm = (
  initialState: Form,
  validate: (fields: Form, submit?: boolean) => { [key: string]: string }
): FormHook => {
  const [formData, setFormData] = useState<Form>(initialState);
  const [errors, setErrors] = useState({});

  const setDataAndErrors = useCallback(
    data => {
      setFormData(data);

      const validationErrors = validate(data);

      setErrors(validationErrors);
    },
    [validate]
  );

  const changeHandler = useCallback(
    (
      event: ChangeEvent<
        HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement
      >
    ) => {
      let updatedData;

      if (
        event.target.tagName === 'INPUT' &&
        event.target.type === 'checkbox'
      ) {
        updatedData = {
          ...formData,
          [event.target.name]: {
            ...formData[event.target.name],
            value: event.target.checked.toString(),
            touched: true
          }
        };
      } else if (
        event.target.tagName === 'INPUT' &&
        event.target.type === 'file'
      ) {
        updatedData = {
          ...formData,
          [event.target.name]: {
            ...formData[event.target.name],
            value: event.target.files,
            touched: true
          }
        };
      } else {
        updatedData = {
          ...formData,
          [event.target.name]: {
            ...formData[event.target.name],
            value: event.target.value,
            touched: true
          }
        };
      }

      setDataAndErrors(updatedData);
    },
    [setDataAndErrors, formData]
  );

  return {
    formData,
    errors,
    changeHandler,
    setErrors
  };
};

export default useForm;
