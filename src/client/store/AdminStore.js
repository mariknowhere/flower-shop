export default class AdminStore {
  constructor() {
    this._buttons = {
      buttonText: 'Добавить новость',
      secondaryButtonText: 'Добавить товар'
    }
    this._device = {
      header: {
        title: 'Создать новый товар',
        image: {
          url: 'icons/close.png',
          height: 45,
        },
      },
    }
    this._news = {
      header: {
        title: 'Создать новую запись',
        image: {
          url: 'icons/close.png',
          height: 45,
        },
      }
    }
  }

  get buttons() {
    return this._buttons
  }

  get device() {
    return this._device
  }

  get news() {
    return this._news
  }
}
