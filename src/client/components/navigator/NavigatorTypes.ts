import {ISocialProps} from "../social/SocialTypes";
import {IImageProps} from "../image/ImageTypes";

interface IBackImageProps {
  image: IImageProps;
  href: string;
}

export interface INavigatorProps {
  title: string;
  socialBackImage: IBackImageProps;
  socialBackText: ISocialProps;
}
