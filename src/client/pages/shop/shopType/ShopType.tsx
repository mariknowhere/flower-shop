import React, { FC } from 'react';
import {observer} from "mobx-react-lite";
import styles from './ShopType.module.scss';
import classNames from "classnames";
import {IShopTypeProps} from "./ShopTypes";
import Text from "../../../components/text/Text";

const ShopType: FC<IShopTypeProps> = observer(({
  id,
  name,
  onClick,
  className,
  classNameText,
}) => {
  return (
    <li className={classNames(className, styles['shop-type'])} onClick={onClick}>
      <Text className={classNames(classNameText, styles['shop-type-text'])}>{name}</Text>
    </li>
  );
});

export default ShopType;
