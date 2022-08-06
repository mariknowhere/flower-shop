import React, {FC, useContext} from 'react';
import {Context} from "../../../index";
import Navigator from "../../components/navigator/Navigator";
import Title from "../../components/title/Title";
import styles from './DeliveryPage.module.scss';
import Table from "../../components/table/Table";
import Text from "../../components/text/Text";
import {TextVariantEnum} from "../../components/text/TextTypes";
import Container from "../../components/container/Container";
import {CursorVariantEnum} from "../../components/container/ContainerTypes";

const DeliveryPage: FC = () => {
  const { delivery } = useContext(Context);
  const { navigator, title, table, description } = delivery;

  return (
    <div>
      <Navigator {...navigator} />
      <Container cursor={CursorVariantEnum.Default}>
        <Title children={title} className={styles['delivery-title']} />
        <Table {...table} classNameRow={styles['delivery-table-row']} />
        <hr className={styles['delivery-divider']}/>
        <Text children={description} variant={TextVariantEnum.S} className={styles['delivery-description']} />
      </Container>
    </div>
  );
};

export default DeliveryPage;
