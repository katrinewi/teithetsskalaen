"use client";
// import { useContext } from "react";
// import ThemeContext from "../../providers/Theme";
import { TextButton } from "../../types/buttons";

const Button = ({ label, variant = "filled", ...rest }: TextButton) => {
  // const { theme } = useContext(ThemeContext);

  console.log(variant);

  const variants: { [key: string]: string } = {
    filled:
      "bg-light-accent text-light-background border-light-accent dark:bg-dark-accent dark:text-dark-text dark:border-dark-accent hover:bg-light-accentHover hover:border-light-accentHover dark:hover:bg-dark-accentHover dark:hover:border-dark-accentHover",
    outlined:
      "bg-transparent border-light-accent text-light-accent dark:border-dark-accent dark:text-dark-accent hover:border-light-accentHover hover:text-light-accentHover dark:hover:border-dark-accentHover dark:hover:text-dark-accentHover",
  };

  return (
    <button
      aria-label={label}
      className={`cursor-pointer p-1 border rounded ${variants[variant]}`}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
