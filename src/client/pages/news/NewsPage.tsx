import React, {FC, useContext} from 'react';
import Navigator from "../../components/navigator/Navigator";
import {Context} from "../../../index";
import News from "./news/News";
import styles from './NewsPage.module.scss';
import Container from "../../components/container/Container";

const NewsPage: FC = () => {
  const { news } = useContext(Context);
  const { navigator, items } = news;

  return (
    <div className={styles.news}>
      <Navigator {...navigator} />
      <Container className={styles['news-container']}>
        {items.map(item => (
          <News {...item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default NewsPage;
