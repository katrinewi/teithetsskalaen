import { FunctionComponent } from "react";

interface Props {
  className?: string;
}

const Logo: FunctionComponent<Props> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 2150 300"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width="402"
      height="375"
      viewBox="55 135 452 425"
      className={className}
    >
      <path
        fill="none"
        strokeMiterlimit="10"
        strokeWidth="12"
        d="M161.096 204.357 81.927 400.329s17.108 50.287 79.169 50.287c62.06 0 79.168-50.287 79.168-50.287l-79.168-195.972zm228.937-59.967-79.168 195.944s17.109 50.281 79.168 50.281c62.061 0 79.168-50.281 79.168-50.281L390.033 144.39z"
      />
      <path
        fill="none"
        strokeMiterlimit="10"
        strokeWidth="18"
        d="m163.264 196.824 228.947-60.117"
      />
      <path
        stroke="none"
        d="M81.586 401.581h158.146L225.9 426.875l-24.75 16.379-27.662 7.362-29.268-.905-31.514-9.732-19.837-16.561-11.283-15.287zm229.373-60h158.146l-13.83 25.294-24.75 16.379-27.662 7.362-29.269-.905-31.514-9.732-19.836-16.561-11.285-15.287z"
      />
    </svg>
    <text id="Teithetsskalaen" className={className} x="1278.001" y="232.5">
      <tspan
        x="1278.001"
        style={{
          fontSize: "250px",
          textAnchor: "middle",
          fontFamily: "Ink Free",
        }}
      >
        Teithetsskalaen
      </tspan>
    </text>
  </svg>
);

export default Logo;
