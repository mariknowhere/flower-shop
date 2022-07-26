import React, {FC, useContext} from 'react';
import {ICreateNewProps} from "./CreateNewTypes";
import Modal from "../modal/Modal";
import {Context} from "../../../../index";

const CreateNew: FC<ICreateNewProps> = ({ isDeviceModalVisible, setDeviceModalVisible }) => {
  const { admin } = useContext(Context);
  const { news } = admin;

  return (
    <Modal {...news.header} isDeviceModalVisible={isDeviceModalVisible} setDeviceModalVisible={setDeviceModalVisible}>

    </Modal>
  );
};

export default CreateNew;
