import React, {FC} from 'react';
import {IInputProps, InputTypeEnum} from "./InputTypes";
import styles from "./Input.module.scss";
import Image from "../image/Image";
import classNames from "classnames";

const Input: FC<IInputProps> = ({
  type = InputTypeEnum.Text,
  image,
  name,
  placeholder,
  className,
  list,
  onClick,
  accept,
}) => {
  return (
    <div className={classNames(className, styles['input-wrapper'])}>
      <input
        accept={accept}
        onClick={onClick}
        type={type}
        name={name}
        list={list}
        id={name}
        placeholder={placeholder}
        className={styles.input}
      />
      <Image {...image} className={styles['input-image']} />
    </div>
  );
};

export default Input;
