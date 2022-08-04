import React, {FC} from 'react';
import {IUploadFormProps} from "./InputFormTypes";
import styles from './InputForm.module.scss';
import Text from "../text/Text";
import Input from "../input/Input";

const InputForm: FC<IUploadFormProps> = ({
  accept,
  title,
  type,
  image,
  name,
  placeholder,
  list,
  className,
  onClick,
}) => {
  return (
    <form encType="multipart/form-data" method="post" className={styles['upload']}>
      <Text children={title} className={styles[`upload-text-${type}`]} />
      <Input
        image={image}
        type={type}
        name={name}
        placeholder={placeholder}
        accept={accept}
        list={list}
        className={className}
        onClick={onClick}
      />
    </form>
  );
};

export default InputForm;
