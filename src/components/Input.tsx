import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string;
}

const Input: FC<InputProps> = ({
  id,
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  error
}) => {
  return (
    <div className="form__group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type || 'text'}
        name={name}
        id={id}
        autoComplete="off"
        value={value}
        placeholder={placeholder}
        className={error ? 'error' : ''}
        onChange={onChange}
      />
      {error && <div className="form__error">{error}</div>}
    </div>
  );
};

export default Input;
