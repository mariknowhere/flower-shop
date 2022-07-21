import React, {FC, useContext} from 'react';
import Navigator from "../../components/navigator/Navigator";
import {Context} from "../../../index";
import styles from './PaymentPage.module.scss';
import Title from "../../components/title/Title";
import Table from "../../components/table/Table";
import Text from "../../components/text/Text";
import {TextVariantEnum} from "../../components/text/TextTypes";

const PaymentPage: FC = () => {
  const { payment } = useContext(Context);
  const { topic, table, navigator, title, list } = payment;

  return (
    <div className={styles.payment}>
      <Navigator {...navigator} />
      <div className={styles['payment-container']}>
        <Title children={topic} className={styles['payment-topic']} />
        <Table
          {...table}
          className={styles['payment-table']}
          classNameCategory={styles['payment-table-category']}
          classNameCategoryValue={styles['payment-table-category-value']}
          classNameRow={styles['payment-table-row']}
        />
        <Title children={title} className={styles['payment-title']} />
        <ul className={styles['payment-list']}>
          {list.map(({ text, id }) => (
            <li key={id} className={styles['payment-item']}>
              <Text children={text} variant={TextVariantEnum.S} className={styles['payment-item-text']} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PaymentPage;