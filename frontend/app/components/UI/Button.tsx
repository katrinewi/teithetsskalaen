import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "filled" | "outlined";

interface TextButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button = forwardRef<HTMLButtonElement, TextButton>(function Button(
  { variant = "filled", children, ...rest },
  ref,
) {
  const variants: Record<ButtonVariant, string> = {
    filled:
      "bg-light-primary text-light-background border-light-primary dark:bg-dark-primary dark:text-dark-text dark:border-dark-primary focus:bg-light-accent focus:border-light-accent focus:dark:bg-dark-accent focus:dark:border-dark-accent",
    outlined:
      "bg-transparent border-light-primary text-light-primary dark:border-dark-primary dark:text-dark-primary focus:border-light-accent focus:dark:boder-dark-accent",
  };

  return (
    <button
      ref={ref}
      {...rest}
      className={`cursor-pointer p-1 border rounded font-medium whitespace-nowrap focus:rotate-1 focus:outline-none ${variants[variant]}`}
    >
      {children}
    </button>
  );
});

export default Button;
