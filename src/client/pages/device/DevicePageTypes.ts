import {IShopCardProps} from "../shop/shopCard/ShopCardTypes";

interface ICompoundProps {
  name: string;
  count: string;
}

export interface IDevicePageProps extends IShopCardProps {
  compound: ICompoundProps[];
}
