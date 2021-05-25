const Checkbox = ({ id, name, value, onChange, checked, label, error }) => {
  return (
    <div className="form__group form__group--checkbox">
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
        />
        <span>{label}</span>
      </label>
      {error && <div className="form__error">error</div>}
    </div>
  );
};

export default Checkbox;
