import { ComponentProps, forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  function Input(props, ref) {
    return (
      <input
        ref={ref}
        {...props}
        className="border rounded w-full py-2 px-3 border-light-primary dark:border-dark-primary dark:bg-dark-background focus:outline-none focus:border-light-accent focus:dark:border-dark-accent"
      />
    );
  },
);

export default Input;
