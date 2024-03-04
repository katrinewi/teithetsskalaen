import { ButtonHTMLAttributes, forwardRef } from "react";

interface IconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  ["aria-label"]: string;
  children?: React.ReactNode;
}

const IconButton = forwardRef<HTMLButtonElement, IconButton>(
  function IconButton({ icon, children, ...rest }, ref) {
    return (
      <button
        ref={ref}
        className="bg-transparent cursor-pointer p-0.25 border-1 border-transparent focus:rotate-1 focus:outline-none"
        {...rest}
      >
        {children}
        {icon}
      </button>
    );
  },
);

export default IconButton;
