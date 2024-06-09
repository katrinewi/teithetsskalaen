import { FunctionComponent } from "react";

interface Props {
  className?: string;
  size?: string;
}

const ExpandLess: FunctionComponent<Props> = ({ className, size = 24 }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    viewBox="0 -960 960 960"
    width={size}
  >
    <path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z" />
  </svg>
);

export default ExpandLess;
