import {IImageProps} from "../image/ImageTypes";

export interface IInputProps {
  image: IImageProps
  name?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  list?: string;
  onClick?: () => void;
}
