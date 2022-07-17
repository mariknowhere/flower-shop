export interface IItemProps {
  category?: string;
  categoryValue?: string;
}

export interface IHeadProps {
  items: IItemProps[];
}

export interface IBodyProps {
  deliveryInCity: string;
  deliveryInCityLate: string;
  inCityFirstValues: IItemProps[];
  inCitySecondValues: IItemProps[];
  price: string;
  deliveryInRegion: string,
  deliveryInRegionLate: string,
}

export interface ITableProps {
  head: IHeadProps;
  body: IBodyProps;
}
