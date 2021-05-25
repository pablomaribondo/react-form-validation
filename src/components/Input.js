const Input = ({
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
        onChange={onChange}
        placeholder={placeholder}
        className={error ? 'error' : ''}
      />
      {error && <div className="form__error">{error}</div>}
    </div>
  );
};

export default Input;
