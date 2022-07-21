import React, {FC, useContext} from 'react';
import Navigator from "../../components/navigator/Navigator";
import {Context} from "../../../index";
import New from "./new/New";
import styles from './NewsPage.module.scss';

const NewsPage: FC = () => {
  const { news } = useContext(Context);
  const { navigator, items } = news;

  return (
    <div className={styles.news}>
      <Navigator {...navigator} />
      <div className={styles['news-container']}>
        {items.map(item => (
          <New {...item} />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
