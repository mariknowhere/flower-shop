import {IImageProps} from "../../../components/image/ImageTypes";
import {IReviewProps} from "../../news/news/NewsTypes";

interface ITitleProps {
  text: string;
  href: string;
}

interface IGeoProps {
  text: string;
  image: IImageProps;
}

interface IShoppingCenterProps {
  text: string;
  href: string;
}

export interface IAboutShopProps {
  title: ITitleProps;
  image: IImageProps;
  geo: IGeoProps;
  hours: string;
  shoppingCenter: IShoppingCenterProps;
  review: IReviewProps;
  social: IImageProps;
  onClick: () => void;
  isShopOpen: boolean;
}
