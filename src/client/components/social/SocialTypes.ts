import { IImageProps } from "../image/ImageTypes";

export interface ISocialProps {
  href: string;
  id: number;
  image?: IImageProps;
  images?: IImageProps[];
  className?: string;
  classNameImage?: string;
  text?: string;
}
