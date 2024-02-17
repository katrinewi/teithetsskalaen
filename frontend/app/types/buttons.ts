export interface BaseButton {
  label: string;
  onClick: (payload?: any) => void;
}

export interface IconButton extends BaseButton {
  icon: React.ReactNode;
}

export interface TextButton extends BaseButton {
  variant?: string;
}
