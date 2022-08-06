import React, {FC} from 'react';
import {DirectionVariantEnum, IContainerProps} from "./ContainerTypes";
import styles from './Container.module.scss';
import classNames from "classnames";

const Container: FC<IContainerProps> = ({
  children,
  className,
  cursor,
  direction = DirectionVariantEnum.Column
}) => {
  return (
    <div className={classNames(className, styles.container, styles[`container-${direction}`])} style={{cursor: `${cursor}`}}>
      {children}
    </div>
  );
};

export default Container;
