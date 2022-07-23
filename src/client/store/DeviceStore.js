import {makeAutoObservable} from "mobx";

export default class DeviceStore {
  constructor() {
    this._navigator = {
      title: 'Каталог цветов',
      socialBackText: {
        text: 'Главная',
        href: '/'
      },
      socialBackImage: {
        image: {
          url: 'icons/less.png',
          height: 40,
        },
        href: '/',
      },
    }
    this._types = [
      {
        id: 1,
        href: '/flowers',
        text: 'Цветы',
      },
      {
        id: 2,
        href: '/rose',
        text: 'Розы',
      },
      {
        id: 3,
        href: '/compositions',
        text: 'Композиции',
      },
      {
        id: 4,
        href: '/event',
        text: 'Событие',
      },
      {
        id: 5,
        href: '/reason',
        text: 'Повод',
      },
      {
        id: 6,
        href: '/bouquets',
        text: 'Букеты',
      },
      {
        id: 7,
        href: '/bride',
        text: 'Букеты невесты',
      },
    ]
    this._devices = [
      {
        id: 1,
        image: {
          url: 'https://zakazcvetov.by/files/compressed/files_cat_4329_1619217903_m.jpg',
          height: 250,
        },
        title: 'Букет Барселона',
        price: '110 руб. 0 коп.',
      },
      {
        id: 2,
        image: {
          url: 'https://zakazcvetov.by/files/compressed/files_cat_4329_1619217903_m.jpg',
          height: 250,
        },
        title: 'Букет Белоснежка',
        price: '150 руб. 0 коп.',
      },
      {
        id: 3,
        image: {
          url: 'https://zakazcvetov.by/files/compressed/files_cat_4329_1619217903_m.jpg',
          height: 250,
        },
        title: 'Букет Ягодка',
        price: '190 руб. 0 коп.',
      },
      {
        id: 4,
        image: {
          url: 'https://zakazcvetov.by/files/compressed/files_cat_4329_1619217903_m.jpg',
          height: 250,
        },
        title: 'Букет из роз и эустомы Латте',
        price: '200 руб. 0 коп.',
      }
    ]
    this._selectedType = {
      id: 1,
    }
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }

  setDevices(devices) {
    this._devices = devices
  }

  setSelectedType(type) {
    this._selectedType = type
  }

  get types() {
    return this._types
  }

  get devices() {
    return this._devices
  }

  get selectedType() {
    return this._selectedType
  }

  get navigator() {
    return this._navigator
  }
}