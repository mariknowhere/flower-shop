import {ABOUT_ROUTE, DELIVERY_ROUTE, NEWS_ROUTE, PAYMENT_ROUTE} from "../constants/routes";
import {makeAutoObservable} from "mobx";

export class NavBarStore {
  constructor() {
    this._items = [
      {
        href: DELIVERY_ROUTE,
        text: 'Доставка',
        id: 1,
      },
      {
        href: PAYMENT_ROUTE,
        text: 'Оплата',
        id: 2,
      },
      {
        href: NEWS_ROUTE,
        text: 'Новости',
        id: 3,
      },
      {
        href: ABOUT_ROUTE,
        text: 'Наши магазины',
        id: 4,
      },
    ]
    this._selectedItem = {
      id: 0,
    }
    makeAutoObservable(this)
  }

  setSelectedItem(item) {
    this._selectedItem = item
  }

  get items() {
    return this._items
  }

  get selectedItem() {
    return this._selectedItem
  }
}
