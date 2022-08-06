import {IImageProps} from "../../components/image/ImageTypes";
import {ISearchProps} from "../../components/search/SearchTypes";
import {ISocialProps} from "../../components/social/SocialTypes";

export interface IHeaderProps {
  image: IImageProps;
  search: ISearchProps;
  basket: ISocialProps;
  signInImage: IImageProps;
}
