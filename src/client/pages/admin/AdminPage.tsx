import React, {useContext, useState} from 'react';
import SecondaryButton from "../../components/button/secondaryButton/SecondaryButton";
import {Context} from "../../../index";
import styles from './AdminPage.module.scss';
import CreateDevice from "../../components/modals/createDevice/CreateDevice";
import CreateNews from "../../components/modals/createNews/CreateNews";
import Container from "../../components/container/Container";
import CreateType from "../../components/modals/createType/CreateType";

const AdminPage = () => {
  const [isNewModalVisible, setNewModalVisible] = useState(false);
  const [isDeviceModalVisible, setDeviceModalVisible] = useState(false);
  const [isTypeModalVisible, setTypeModalVisible] = useState(false);

  const { admin } = useContext(Context);
  const { buttons } = admin

  const onDeviceCreateButtonClick = () => setDeviceModalVisible(!isDeviceModalVisible);
  const onNewCreateButtonClick = () => setNewModalVisible(!isNewModalVisible);
  const onTypeCreateButtonClick = () => setTypeModalVisible(!isTypeModalVisible);

  return (
    <Container className={styles.admin}>
      <SecondaryButton
        buttonText={buttons.newsButtonText}
        className={styles['admin-button']}
        onClick={onNewCreateButtonClick}
      />
      <SecondaryButton
        buttonText={buttons.deviceButtonText}
        className={styles['admin-button']}
        onClick={onDeviceCreateButtonClick}
      />
      <SecondaryButton
        buttonText={buttons.typeButtonText}
        className={styles['admin-button']}
        onClick={onTypeCreateButtonClick}
      />
      <CreateNews isModalVisible={isNewModalVisible} setModalVisible={setNewModalVisible} />
      <CreateDevice isModalVisible={isDeviceModalVisible} setModalVisible={setDeviceModalVisible} />
      <CreateType isModalVisible={isTypeModalVisible} setModalVisible={setTypeModalVisible} />
    </Container>
  );
};

export default AdminPage;
