import AboutStore from "../store/AboutStore";
import DeliveryStore from "../store/DeliveryStore";
import NewsStore from "../store/NewsStore";
import PaymentStore from "../store/PaymentStore";
import DeviceStore from "../store/DeviceStore";
import UserStore from "../store/UserStore";
import AdminStore from "../store/AdminStore";
import {NavBarStore} from "../store/NavBarStore";

export const ContextValue = {
  about: new AboutStore(),
  delivery: new DeliveryStore(),
  news: new NewsStore(),
  payment: new PaymentStore(),
  device: new DeviceStore(),
  user: new UserStore(),
  admin: new AdminStore(),
  navbar: new NavBarStore(),
}
