import {IImageProps} from "../../../components/image/ImageTypes";
import {ISocialProps} from "../../../components/social/SocialTypes";

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

interface IReviewProps {
  social: ISocialProps;
  count: string;
}

export interface IAboutShopProps {
  id: number;
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
