import React, {FC} from 'react';
import styles from "./SecondaryButton.module.scss";
import {ISecondaryButtonProps, SecondaryButtonEnum} from "./SecondaryButtonTypes";
import classNames from "classnames";

const SecondaryButton: FC<ISecondaryButtonProps> = ({
  buttonText,
  className,
  onClick,
  type = SecondaryButtonEnum.Primary,
}) => {
  return (
    <button className={classNames(className, styles['secondary-button'], styles[`secondary-button-${type}`])} onClick={onClick}>
      <span>{buttonText}</span>
    </button>
  );
};

export default SecondaryButton;
