import React, {FC} from 'react';
import './CommonPage.css';
import Header from "../blocks/header/Header";
import {store} from "../store/store";

const CommonPage: FC = () => {
  const { headerData } = store;

  return (
    <div>
      <Header {...headerData} />
    </div>
  );
};

export default CommonPage;
