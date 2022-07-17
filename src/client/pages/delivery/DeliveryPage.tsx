import React, {FC, useContext} from 'react';
import {Context} from "../../../index";
import Navigator from "../../components/navigator/Navigator";
import Title from "../../components/title/Title";
import styles from './DeliveryPage.module.scss';
import Table from "../../components/table/Table";
import Text from "../../components/text/Text";
import {TextVariantEnum} from "../../components/text/TextTypes";

const DeliveryPage: FC = () => {
  const { delivery } = useContext(Context);
  const { navigator, title, table, description } = delivery;

  return (
    <div>
      <Navigator {...navigator} />
      <div className={styles['delivery-container']}>
        <Title children={title} className={styles['delivery-title']} />
        <Table {...table} />
        <hr/>
        <Text children={description} variant={TextVariantEnum.S} className={styles['delivery-description']} />
      </div>
    </div>
  );
};

export default DeliveryPage;
