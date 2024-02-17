import { BaseButton } from "../../types/buttons";

const BaseButton = ({ label, ...rest }: BaseButton) => {
  return (
    <button
      aria-label={label}
      className="bg-transparent cursor-pointer p-0.25 border-1 border-transparent"
      {...rest}
    >
      {label}
    </button>
  );
};

export default BaseButton;
