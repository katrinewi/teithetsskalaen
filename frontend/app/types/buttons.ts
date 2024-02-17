export interface BaseButton {
  label: string;
  onClick: () => void;
  // children: React.ReactNode;
  // type?: "button" | "submit" | "reset";
  // disabled?: boolean;
  // className?: string;
  // style?: React.CSSProperties;
}

export interface IconButton extends BaseButton {
  icon: React.ReactNode;
}
