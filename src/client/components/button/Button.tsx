import React, {FC} from 'react';
import styles from "./Button.module.scss";
import Social from "../social/Social";
import {IButtonProps} from "./ButtonTypes";
import classNames from "classnames";

const Button: FC<IButtonProps> = ({ button, buttonLabel, className, classNameButton }) => {
  return (
    <div className={classNames(className, styles.button)}>
      <Social {...button} className={classNames(classNameButton, styles['button-text'])} />
      {buttonLabel && <span className={styles['button-label']}>{buttonLabel}</span>}
    </div>
  );
};

export default Button;
