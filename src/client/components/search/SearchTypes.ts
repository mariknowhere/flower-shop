import {IImageProps} from "../image/ImageTypes";

export interface ISearchProps {
  name: string;
  image: IImageProps;
  action: string;
  placeholder?: string;
  description?: string;
}
