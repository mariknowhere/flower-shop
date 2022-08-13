import {IImageProps} from "../../components/image/ImageTypes";
import {ISearchProps} from "../../components/search/SearchTypes";

export interface IHeaderProps {
  image: IImageProps;
  search: ISearchProps;
  basket: IImageProps;
  signInImage: IImageProps;
  logOutImage: IImageProps;
  adminImage: IImageProps;
}
