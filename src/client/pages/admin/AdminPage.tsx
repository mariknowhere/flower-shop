import React, {useContext, useState} from 'react';
import SecondaryButton from "../../components/button/secondaryButton/SecondaryButton";
import {Context} from "../../../index";
import styles from './AdminPage.module.scss';
import CreateDevice from "../../components/modals/createDevice/CreateDevice";
import CreateNews from "../../components/modals/createNews/CreateNews";
import Container from "../../components/container/Container";

const AdminPage = () => {
  const [isNewModalVisible, setNewModalVisible] = useState(false);
  const [isDeviceModalVisible, setDeviceModalVisible] = useState(false);

  const { admin } = useContext(Context);
  const { buttons } = admin

  const onDeviceCreateButtonClick = () => setDeviceModalVisible(!isDeviceModalVisible);
  const onNewCreateButtonClick = () => setNewModalVisible(!isNewModalVisible);

  return (
    <Container className={styles.admin}>
      <SecondaryButton
        buttonText={buttons.buttonText}
        className={styles['admin-button']}
        onClick={onNewCreateButtonClick}
      />
      <SecondaryButton
        buttonText={buttons.secondaryButtonText}
        className={styles['admin-button']}
        onClick={onDeviceCreateButtonClick}
      />
      <CreateNews isDeviceModalVisible={isNewModalVisible} setDeviceModalVisible={setNewModalVisible} />
      <CreateDevice isDeviceModalVisible={isDeviceModalVisible} setDeviceModalVisible={setDeviceModalVisible} />
    </Container>
  );
};

export default AdminPage;
