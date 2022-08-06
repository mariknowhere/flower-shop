import React, { FC } from 'react';
import {observer} from "mobx-react-lite";
import styles from './ShopType.module.scss';
import {Link} from "react-router-dom";
import classNames from "classnames";
import {IShopTypeProps} from "./ShopTypes";

const ShopType: FC<IShopTypeProps> = observer(({
  id,
  href,
  text,
  onClick,
  className,
  classNameText,
}) => {
  return (
    <li className={classNames(className, styles['shop-type'])}>
      <Link to={href} className={classNames(classNameText, styles['shop-type-text'])} onClick={onClick}>{text}</Link>
    </li>
  );
});

export default ShopType;
