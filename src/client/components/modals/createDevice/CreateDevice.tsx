import React, {FC, useContext} from 'react';
import {ICreateDeviceProps} from "./CreateDeviceTypes";
import styles from './CreateDevice.module.scss';
import {Context} from "../../../../index";
import Modal from "../modal/Modal";

const CreateDevice: FC<ICreateDeviceProps> = ({ isDeviceModalVisible, setDeviceModalVisible }) => {
  const { admin } = useContext(Context)
  const { device } = admin

  return (
    <Modal {...device.header} isDeviceModalVisible={isDeviceModalVisible} setDeviceModalVisible={setDeviceModalVisible}>
      <div>
        <input list={'auto'} />
        <datalist id={'auto'}>
          <option value="Значение 1" />
          <option value="Значение 2" />
        </datalist>
      </div>
    </Modal>
  );
};

export default CreateDevice;
