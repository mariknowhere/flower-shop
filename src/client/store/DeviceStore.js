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
          url: '../icons/less.png',
          height: 40,
        },
        href: '/',
      },
    }
    this._types = []
    this._devices = []
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
