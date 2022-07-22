export interface IItemProps {
  category?: string;
  categoryValue?: string;
  id: number;
}

export interface IHeadProps {
  items: IItemProps[];
}

export interface IBodyProps {
  title: string;
  titleAddition?: string;
  categoryValuesPrimary: IItemProps[];
  categoryValuesSecondary?: IItemProps[];
  categoryValueAddition?: string;
  titleSecondary?: string;
  titleSecondaryAddition?: string;
}

export interface ITableProps {
  head: IHeadProps;
  body: IBodyProps;
  className?: string;
  classNameCategory?: string;
  classNameRow?: string;
  classNameCategoryValue?: string;
}
