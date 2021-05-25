const Radio = ({ label, choices, name, onChange, checked, error }) => {
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
            onChange={onChange}
            checked={checked && checked === choice.value}
          />
          <span>{choice.label}</span>
        </label>
      ))}
      {error && <span className="form__error">{error}</span>}
    </div>
  );
};

export default Radio;
