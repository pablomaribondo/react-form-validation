const Textarea = ({ id, label, name, value, onChange, error }) => {
  return (
    <div className="form__group">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={error ? 'error' : ''}
      ></textarea>
      {error && <div className="form__error">{error}</div>}
    </div>
  );
};

export default Textarea;
