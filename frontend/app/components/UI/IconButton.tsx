import { IconButton } from "../../types/buttons";

const IconButton = ({ label, icon, ...rest }: IconButton) => {
  return (
    <button
      aria-label={label}
      className="bg-transparent cursor-pointer p-0.25 border-1 border-transparent"
      {...rest}
    >
      {icon}
    </button>
  );
};

export default IconButton;
