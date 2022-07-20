import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import CommonPage from './client/pages/CommonPage';
import AboutStore from "./client/store/AboutStore";
import DeliveryStore from "./client/store/DeliveryStore";
import NewsStore from "./client/store/NewsStore";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const Context = createContext({
  about: new AboutStore(),
  delivery: new DeliveryStore(),
  news: new NewsStore(),
})

const { Provider } = Context;

root.render(
    <Provider value={{
      about: new AboutStore(),
      delivery: new DeliveryStore(),
      news: new NewsStore(),
    }}>
      <CommonPage />
    </Provider>
);
