import React, {FC, useContext} from 'react';
import styles from "./CreateDeviceProduct.module.scss";
import Input from "../../../input/Input";
import {InputTypeEnum} from "../../../input/InputTypes";
import SecondaryButton from "../../../button/secondaryButton/SecondaryButton";
import {PRODUCT_BUTTON_TEXT} from "../../../../constants/createDevice";
import {ICreateDeviceProductProps} from "./CreateDeviceProductTypes";
import {Context} from "../../../../../index";

const CreateDeviceProduct: FC<ICreateDeviceProductProps> = ({
  id,
  removeProductHandler,
  name,
  count,
  onChangeName,
  onChangeCount
}) => {
  const { admin } = useContext(Context);
  const { deviceModalData } = admin;

  return (
    <div className={styles['device-modal-product']}>
      <Input
        className={styles['device-modal-product-input']}
        placeholder={deviceModalData.compound.name.placeholder}
        name={deviceModalData.compound.name.name}
        value={name}
        onChange={onChangeName}
      />
      <Input
        className={styles['device-modal-product-input']}
        placeholder={deviceModalData.compound.count.placeholder}
        name={deviceModalData.compound.count.name}
        type={InputTypeEnum.Number}
        value={count}
        onChange={onChangeCount}
      />
      <SecondaryButton
        onClick={() => removeProductHandler(id)}
        buttonText={PRODUCT_BUTTON_TEXT}
        className={styles['device-modal-product-button']}
      />
    </div>
  );
};

export default CreateDeviceProduct;
