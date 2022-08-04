import {IImageProps} from "../../../components/image/ImageTypes";
import {ISocialProps} from "../../../components/social/SocialTypes";

interface IDateProps {
  image: IImageProps;
  text: string;
}

export interface INewsProps {
  title: string;
  mainImage: IImageProps;
  date: IDateProps;
  id: number;
  description: string;
  review: ISocialProps;
}
