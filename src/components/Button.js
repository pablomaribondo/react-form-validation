const Button = ({ type, title }) => {
  return (
    <button type={type} className="btn">
      {title}
    </button>
  );
};

export default Button;
