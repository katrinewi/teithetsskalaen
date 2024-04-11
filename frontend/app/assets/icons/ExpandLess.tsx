import { FunctionComponent } from "react";

interface Props {
  className?: string;
  width?: string;
  height?: string;
}

const ExpandLess: FunctionComponent<Props> = ({
  className,
  height = 24,
  width = 24,
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    viewBox="0 -960 960 960"
    width={width}
  >
    <path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z" />
  </svg>
);

export default ExpandLess;
