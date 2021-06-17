import { FC, TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error: string;
}

const Textarea: FC<TextareaProps> = ({
  id,
  label,
  name,
  value,
  onChange,
  error
}) => {
  return (
    <div className="form__group">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={name}
        value={value}
        className={error ? 'error' : ''}
        onChange={onChange}
      />
      {error && <div className="form__error">{error}</div>}
    </div>
  );
};

export default Textarea;
