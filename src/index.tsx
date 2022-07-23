import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import CommonPage from './client/pages/CommonPage';
import AboutStore from "./client/store/AboutStore";
import DeliveryStore from "./client/store/DeliveryStore";
import NewsStore from "./client/store/NewsStore";
import PaymentStore from "./client/store/PaymentStore";
import DeviceStore from "./client/store/DeviceStore";
import UserStore from "./client/store/UserStore";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const Context = createContext({
  about: new AboutStore(),
  delivery: new DeliveryStore(),
  news: new NewsStore(),
  payment: new PaymentStore(),
  device: new DeviceStore(),
  user: new UserStore(),
})

const { Provider } = Context;

root.render(
    <Provider value={{
      about: new AboutStore(),
      delivery: new DeliveryStore(),
      news: new NewsStore(),
      payment: new PaymentStore(),
      device: new DeviceStore(),
      user: new UserStore(),
    }}>
      <CommonPage />
    </Provider>
);
