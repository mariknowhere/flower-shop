import {IImageProps} from "../image/ImageTypes";

export interface IInputProps {
  type: string;
  name: string;
  image: IImageProps
  placeholder?: string;
  className?: string;
}
