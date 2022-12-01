import {IImageProps} from "../../components/image/ImageTypes";
import {ISocialProps} from "../../components/social/SocialTypes";

interface IDescriptionProps {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
}

export interface IFooterProps {
  image: IImageProps;
  links: ISocialProps[];
  socials: ISocialProps[];
  description: IDescriptionProps;
}
