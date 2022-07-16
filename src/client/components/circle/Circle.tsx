import React, {FC} from 'react';
import {ICircleProps} from "./CircleTypes";
import classNames from "classnames";
import styles from "./Circle.module.scss";

const Circle: FC<ICircleProps> = ({ isShopOpen, className }) => {
  return (
    <span className={classNames(styles.circle, className, {
      [styles['circle-open']]: isShopOpen,
      [styles['circle-close']]: !isShopOpen,
    })} />
  );
};

export default Circle;
