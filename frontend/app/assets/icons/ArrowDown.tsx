import { FunctionComponent } from "react";

interface Props {
  className?: string;
  size?: string;
}

const ExpandMore: FunctionComponent<Props> = ({ className, size = 24 }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    viewBox="0 -960 960 960"
    width={size}
  >
    <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
  </svg>
);

export default ExpandMore;
