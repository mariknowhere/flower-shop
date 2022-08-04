import React, { FC, useContext } from 'react';
import {ICreateDeviceProps} from "./CreateDeviceTypes";
import styles from './CreateDevice.module.scss';
import {Context} from "../../../../index";
import Modal from "../modal/Modal";
import Text from "../../text/Text";
import Input from "../../input/Input";

const CreateDevice: FC<ICreateDeviceProps> = ({ isDeviceModalVisible, setDeviceModalVisible }) => {
  const { admin, device } = useContext(Context);
  const { deviceModalData } = admin;

  const typeText = `${deviceModalData.typeInput.text}:`;

  return (
    <Modal {...deviceModalData.header} isDeviceModalVisible={isDeviceModalVisible} setDeviceModalVisible={setDeviceModalVisible}>
      <div>
        <div>
          <Text children={typeText} className={styles['device-modal-text']} />
          <Input
            list={deviceModalData.typeInput.list}
            placeholder={deviceModalData.typeInput.text}
            image={deviceModalData.typeInput.image}
            className={styles['device-modal-input']}
          />
          <datalist id={deviceModalData.typeInput.id} className={styles['device-modal-input']}>
            {device.types.map(({ text, id }) => (
              <option value={text} key={id} />
            ))}
          </datalist>
        </div>
        <div>
          {deviceModalData.inputs.map(({ title, placeholder, image, type }) => (
            <div>
              <Text children={title} className={styles['device-modal-text']} />
              <Input
                type={type}
                placeholder={placeholder}
                image={image}
                className={styles['device-modal-input']}
              />
            </div>
          ))}
        </div>
        <Text children={'Выберите изображение:'} className={styles['device-modal-image-text']} />
        <div className={styles['device-modal-image-wrapper']}>
          <form encType="multipart/form-data" method="post">
            <input accept="image/*" type="file" id="input-file" className={styles['device-modal-image']}/>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default CreateDevice;
