import { FC, InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  error: string;
  label: string;
}

const Checkbox: FC<CheckboxProps> = ({
  id,
  name,
  value,
  onChange,
  checked,
  label,
  error
}) => {
  return (
    <div className="form__group form__group--checkbox">
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={checked && checked.toString() === value}
          onChange={onChange}
        />
        <span>{label}</span>
      </label>
      {error && <div className="form__error">{error}</div>}
    </div>
  );
};

export default Checkbox;
