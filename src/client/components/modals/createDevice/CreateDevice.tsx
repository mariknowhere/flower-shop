import React, {FC, useContext} from 'react';
import {ICreateDeviceProps} from "./CreateDeviceTypes";
import styles from './CreateDevice.module.scss';
import {Context} from "../../../../index";
import Modal from "../modal/Modal";
import InputForm from "../../inputForm/InputForm";
import {InputTypeEnum} from "../../input/InputTypes";
import SecondaryButton from "../../button/secondaryButton/SecondaryButton";

const CreateDevice: FC<ICreateDeviceProps> = ({ isDeviceModalVisible, setDeviceModalVisible }) => {
  const { admin, device } = useContext(Context);
  const { deviceModalData } = admin;

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
      <SecondaryButton buttonText={deviceModalData.buttonText} className={styles['device-modal-button']} />
    </Modal>
  );
};

export default CreateDevice;
