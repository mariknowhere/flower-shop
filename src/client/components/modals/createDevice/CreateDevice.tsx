import React, {FC, useContext, useState} from 'react';
import {ICreateDeviceProps} from "./CreateDeviceTypes";
import styles from './CreateDevice.module.scss';
import {Context} from "../../../../index";
import Modal from "../modal/Modal";
import InputForm from "../../inputForm/InputForm";
import {InputTypeEnum} from "../../input/InputTypes";
import SecondaryButton from "../../button/secondaryButton/SecondaryButton";
import Text from "../../text/Text";
import {TextVariantEnum} from "../../text/TextTypes";
import {SecondaryButtonEnum} from "../../button/secondaryButton/SecondaryButtonTypes";
import {ADD_NEW_PRODUCT_BUTTON_TEXT, COMPOUND_TEXT} from "../../../constants/createDevice";
import CreateDeviceProduct from "./createDeviceProduct/CreateDeviceProduct";
import {ICreateDeviceProductProps} from "./createDeviceProduct/CreateDeviceProductTypes";

type CreateDeviceType = Omit<ICreateDeviceProductProps, 'removeProductHandler'>;

const CreateDevice: FC<ICreateDeviceProps> = ({ isDeviceModalVisible, setDeviceModalVisible }) => {
  const { admin, device } = useContext(Context);
  const [compound, setCompound] = useState<CreateDeviceType[]>([]);
  const { deviceModalData } = admin;

  const addProduct = () => {
    setCompound([ ...compound, { id: Date.now() } ])
  }

  const removeProduct = (id: number) => {
    setCompound(compound.filter(product => product.id !== id))
  }

  const typeText = `${deviceModalData.typeInput.text}:`;

  return (
    <Modal {...deviceModalData.header} isDeviceModalVisible={isDeviceModalVisible} setDeviceModalVisible={setDeviceModalVisible}>
      <div>
        <InputForm
          title={typeText}
          list={deviceModalData.typeInput.list}
          placeholder={deviceModalData.typeInput.text}
          image={deviceModalData.typeInput.image}
        />
        <datalist id={deviceModalData.typeInput.id}>
          {device.types.map(({ text, id }) => (
            <option value={text} key={id} />
          ))}
        </datalist>
      </div>
      <InputForm
        title={deviceModalData.titleInput.title}
        placeholder={deviceModalData.titleInput.placeholder}
        image={deviceModalData.titleInput.image}
      />
      <InputForm
        title={deviceModalData.priceInput.title}
        placeholder={deviceModalData.priceInput.placeholder}
        image={deviceModalData.priceInput.image}
        type={InputTypeEnum.Number}
      />
      <InputForm
        title={deviceModalData.priceInput.title}
        placeholder={deviceModalData.priceInput.placeholder}
        image={deviceModalData.priceInput.image}
        type={InputTypeEnum.Number}
      />
      <InputForm
        title={deviceModalData.imageInput.title}
        accept={deviceModalData.imageInput.accept}
        name={deviceModalData.imageInput.name}
        type={InputTypeEnum.File}
      />
      <hr />
      <div>
        <Text
          children={COMPOUND_TEXT}
          className={styles['device-modal-text']}
          variant={TextVariantEnum.L}
        />
        <SecondaryButton
          buttonText={ADD_NEW_PRODUCT_BUTTON_TEXT}
          onClick={addProduct}
          className={styles['device-modal-add-button']}
          type={SecondaryButtonEnum.Secondary}
        />
        {compound.map((product) => (
            <CreateDeviceProduct {...product} removeProductHandler={() => removeProduct(product.id)} key={product.id} />
        ))}
      </div>
      <hr />
      <SecondaryButton buttonText={deviceModalData.buttonText} className={styles['device-modal-button']} />
    </Modal>
  );
};

export default CreateDevice;
