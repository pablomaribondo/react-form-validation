import { FC, SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error: string;
  options: { label: string; value: string }[];
}

const Select: FC<SelectProps> = ({
  id,
  label,
  name,
  value,
  onChange,
  options,
  error
}) => {
  return (
    <div className="form__group">
      <label htmlFor={id}>{label}</label>
      <select
        name={name}
        value={value}
        className={error ? 'error' : ''}
        onChange={onChange}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className="form__error">{error}</div>}
    </div>
  );
};

export default Select;
