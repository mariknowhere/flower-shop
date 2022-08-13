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
  value,
  onChange,
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
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={classNames(styles.input, { [styles['input-without-image']]: !image })}
      />
      {image && <Image {...image} className={styles['input-image']}/>}
    </div>
  );
};

export default Input;
