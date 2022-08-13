import React, {FC, useContext, useState, KeyboardEvent} from 'react';
import {IModalProps} from "../modal/ModalTypes";
import Modal from "../modal/Modal";
import InputForm from "../../inputForm/InputForm";
import {Context} from "../../../../index";
import SecondaryButton from "../../button/secondaryButton/SecondaryButton";
import {createType} from "../../../http/deviceAPI";

const CreateType: FC<IModalProps> = ({ isModalVisible, setModalVisible }) => {
  const [name, setName] = useState('');
  const { admin } = useContext(Context);
  const { type } = admin;

  const onNameChangeHandler = (event: KeyboardEvent<HTMLInputElement>) => setName(event.target.value);
  const addTypeClick = () => {
    createType({ name: name }).then(data => {
      setName('');
      setModalVisible(false);
    })
  };

  return (
    <Modal {...type.header} isModalVisible={isModalVisible} setModalVisible={setModalVisible}>
      <InputForm {...type.input} value={name} onChange={onNameChangeHandler} />
      <SecondaryButton buttonText={type.buttonText} onClick={addTypeClick} />
    </Modal>
  );
};

export default CreateType;
