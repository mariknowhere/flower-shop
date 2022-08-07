import {IImageProps} from "../../../components/image/ImageTypes";

interface IDateProps {
  image: IImageProps;
  text: string;
}

export interface IReviewProps {
  text: string;
  href: string;
  count?: string;
}

export interface INewsProps {
  title: string;
  mainImage: IImageProps;
  date: IDateProps;
  id: number;
  description: string;
  review: IReviewProps;
}
