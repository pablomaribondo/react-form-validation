/* global Form: readonly */
/* eslint-disable complexity */
const validateEmail = (email: string) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(email);
};

const validate = (fields: Form, submit: boolean = false) => {
  return Object.entries(fields).reduce((errors, [fieldName, fieldData]) => {
    if (submit) {
      fieldData.touched = true;
    }

    if (
      fieldData.required &&
      (fieldData.value === '' || fieldData.value === 'false') &&
      fieldData.touched
    ) {
      errors[fieldName] = fieldData.requiredMessage
        ? fieldData.requiredMessage
        : 'This field is required!';
    }

    if (
      fieldData.file &&
      fieldData.required &&
      Object.keys(fieldData.value).length === 0 &&
      fieldData.touched
    ) {
      errors[fieldName] = fieldData.requiredMessage
        ? fieldData.requiredMessage
        : 'This field is required!';
    }

    if (
      !errors[fieldName] &&
      fieldData.email &&
      !validateEmail(fieldData.value) &&
      fieldData.touched
    ) {
      errors[fieldName] = fieldData.emailMessage
        ? fieldData.emailMessage
        : 'Invalid email address!';
    }

    if (
      !errors[fieldName] &&
      fieldData.matchWith &&
      fieldData.value !== fields[fieldData.matchWith].value &&
      fieldData.touched
    ) {
      errors[fieldName] = fieldData.matchWithMessage
        ? fieldData.matchWithMessage
        : 'Fields values are not equal!';
    }

    if (
      !errors[fieldName] &&
      fieldData.minLength &&
      fieldData.value !== '' &&
      fieldData.value.length < fieldData.minLength &&
      fieldData.touched
    ) {
      errors[fieldName] = fieldData.minLengthMessage
        ? fieldData.minLengthMessage
        : `This field must have at least ${fieldData.minLength} characters`;
    }

    if (
      !errors[fieldName] &&
      fieldData.maxLength &&
      fieldData.value !== '' &&
      fieldData.value.length > fieldData.maxLength &&
      fieldData.touched
    ) {
      errors[fieldName] = fieldData.maxLengthMessage
        ? fieldData.maxLengthMessage
        : `This field must have less than ${fieldData.maxLength} characters`;
    }

    if (
      !errors[fieldName] &&
      fieldData.file &&
      fieldData.touched &&
      fieldData.allowedTypes &&
      fieldData.fileData &&
      fieldData.fileData[0] &&
      !fieldData.allowedTypes.includes(fieldData.fileData[0].type.split('/')[1])
    ) {
      errors[fieldName] = fieldData.allowedTypesMessage
        ? fieldData.allowedTypesMessage
        : 'Invalid file type!';
    }

    if (
      !errors[fieldName] &&
      fieldData.file &&
      fieldData.touched &&
      fieldData.maxFileSize &&
      fieldData.fileData &&
      fieldData.fileData[0] &&
      fieldData.maxFileSize * 1024 < Math.round(fieldData.fileData[0].size)
    ) {
      errors[fieldName] = fieldData.maxFileSizeMessage
        ? fieldData.maxFileSizeMessage
        : `File is too large(${Math.round(
            fieldData.fileData[0].size / 1024
          )}KB), it cannot be larger than ${fieldData.maxFileSize}KB`;
    }

    return errors;
  }, {} as { [key: string]: string });
};

export default validate;
