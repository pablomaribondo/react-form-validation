interface Form {
  [key: string]: {
    value: string;
    required?: boolean;
    requiredMessage?: string;
    email?: boolean;
    emailMessage?: string;
    minLength?: number;
    minLengthMessage?: string;
    maxLength?: number;
    maxLengthMessage?: string;
    matchWith?: string;
    matchWithMessage?: string;
    fileData?: { size: number; type: string }[];
    file?: boolean;
    allowedTypes?: string[];
    allowedTypesMessage?: string;
    maxFileSize?: number;
    maxFileSizeMessage?: string;
    touched?: boolean;
  };
}
