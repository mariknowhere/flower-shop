import { IImageProps } from "../image/ImageTypes";

export interface ISocialProps {
  href: string;
  id: number;
  image?: IImageProps;
  className?: string;
  classNameImage?: string;
  text?: string;
}
