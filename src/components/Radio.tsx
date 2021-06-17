import { FC, InputHTMLAttributes } from 'react';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string;
  choices: { id: string; label: string; value: string }[];
}

const Radio: FC<RadioProps> = ({
  label,
  choices,
  name,
  onChange,
  checked,
  error
}) => {
  return (
    <div className="form__group form__group--radio">
      <p>{label}</p>
      {choices.map(choice => (
        <label key={choice.id} htmlFor={choice.id}>
          <input
            type="radio"
            name={name}
            id={choice.id}
            value={choice.value}
            checked={checked}
            // Checked={checked && checked === choice.value}
            onChange={onChange}
          />
          <span>{choice.label}</span>
        </label>
      ))}
      {error && <span className="form__error">{error}</span>}
    </div>
  );
};

export default Radio;
