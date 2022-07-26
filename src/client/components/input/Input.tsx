import React, {FC} from 'react';
import {IInputProps} from "./InputTypes";
import styles from "./Input.module.scss";
import Image from "../image/Image";
import classNames from "classnames";

const Input: FC<IInputProps> = ({ type, image, name, placeholder, className }) => {
  return (
    <div className={classNames(className, styles['input-wrapper'])}>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={styles.input}
      />
      <Image {...image} className={styles['input-image']} />
    </div>
  );
};

export default Input;
