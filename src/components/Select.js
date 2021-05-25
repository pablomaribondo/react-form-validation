const Select = ({ id, label, name, value, onChange, options, error }) => {
  return (
    <div className="form__group">
      <label htmlFor={id}>{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={error ? 'error' : ''}
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
