import { KeyboardEvent } from "react";
import {IImageProps} from "../image/ImageTypes";

export enum InputTypeEnum {
  Text = 'text',
  Number = 'Number',
  Password = 'password',
  Date = 'date',
  File = 'file',
  Checkbox = 'checkbox',
}

export interface IInputProps {
  image?: IImageProps
  name?: string;
  type?: InputTypeEnum;
  placeholder?: string;
  className?: string;
  list?: string;
  onClick?: () => void;
  accept?: string;
  value?: any;
  onChange?: (event: KeyboardEvent<HTMLInputElement>) => void;
}
