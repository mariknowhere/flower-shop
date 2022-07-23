export enum SecondaryButtonEnum {
  Primary = 'primary',
  Secondary = 'secondary'
}

export interface ISecondaryButtonProps {
  buttonText?: string;
  className?: string;
  onClick?: () => void;
  type?: SecondaryButtonEnum;
}
