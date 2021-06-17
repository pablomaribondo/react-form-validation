import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<ButtonProps> = ({ type = 'button', title }) => {
  return (
    <button type={type} className="btn">
      {title}
    </button>
  );
};

export default Button;
