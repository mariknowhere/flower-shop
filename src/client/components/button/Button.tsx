import React, {FC} from 'react';
import styles from "./Button.module.scss";
import {IButtonProps} from "./ButtonTypes";
import classNames from "classnames";
import Text from "../text/Text";

const Button: FC<IButtonProps> = ({ buttonText, buttonLabel, className, classNameButton }) => {
  return (
    <div className={classNames(className, styles.button)}>
      <Text children={buttonText} className={classNames(classNameButton, styles['button-text'])} />
      {buttonLabel && <span className={styles['button-label']}>{buttonLabel}</span>}
    </div>
  );
};

export default Button;
