import { ButtonHTMLAttributes, forwardRef } from "react";

interface TextButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outlined";
}

const Button = forwardRef<HTMLButtonElement, TextButton>(function Button(
  { variant = "filled", children, ...rest },
  ref,
) {
  const variants: { [key: string]: string } = {
    filled:
      "bg-light-accent text-light-background border-light-accent dark:bg-dark-accent dark:text-dark-text dark:border-dark-accent hover:bg-light-accentHover hover:border-light-accentHover dark:hover:bg-dark-accentHover dark:hover:border-dark-accentHover",
    outlined:
      "bg-transparent border-light-accent text-light-accent dark:border-dark-accent dark:text-dark-accent hover:border-light-accentHover hover:text-light-accentHover dark:hover:border-dark-accentHover dark:hover:text-dark-accentHover",
  };

  return (
    <button
      ref={ref}
      {...rest}
      className={`cursor-pointer p-1 border rounded font-medium whitespace-nowrap ${variants[variant]}`}
    >
      {children}
    </button>
  );
});

export default Button;
