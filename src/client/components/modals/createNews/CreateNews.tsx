import React, {FC, useContext} from 'react';
import {ICreateNewsProps} from "./CreateNewsTypes";
import Modal from "../modal/Modal";
import {Context} from "../../../../index";
import styles from './CreateNews.module.scss';
import Text from "../../text/Text";
import InputForm from "../../inputForm/InputForm";
import {InputTypeEnum} from "../../input/InputTypes";
import SecondaryButton from "../../button/secondaryButton/SecondaryButton";

const CreateNews: FC<ICreateNewsProps> = ({ isDeviceModalVisible, setDeviceModalVisible }) => {
  const { admin } = useContext(Context);
  const { news } = admin;

  return (
    <Modal {...news.header} isDeviceModalVisible={isDeviceModalVisible} setDeviceModalVisible={setDeviceModalVisible}>
      <InputForm title={news.titleInput.title} image={news.titleInput.image} placeholder={news.titleInput.placeholder} />
      <div>
        <Text children={news.descriptionInput.title} className={styles['news-modal-text']} />
        <textarea id={news.descriptionInput.id} className={styles['news-modal-description']} />
      </div>
      <InputForm title={news.dateInput.title} image={news.dateInput.image} type={InputTypeEnum.Date} />
      <InputForm
        name={news.imageInput.id}
        title={news.imageInput.title}
        accept={news.imageInput.accept}
        type={InputTypeEnum.File}
      />
      <SecondaryButton buttonText={news.buttonText} className={styles['news-modal-button']} />
    </Modal>
  );
};

export default CreateNews;
