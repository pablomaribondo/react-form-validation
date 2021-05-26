import { useState, useCallback } from 'react';

const useForm = (initialState, validate) => {
  const [formData, setFormData] = useState(initialState);
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
    event => {
      let updatedData;

      if (
        event.target.tagName === 'INPUT' &&
        event.target.type === 'checkbox'
      ) {
        updatedData = {
          ...formData,
          [event.target.name]: {
            ...formData[event.target.name],
            value: event.target.checked,
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
