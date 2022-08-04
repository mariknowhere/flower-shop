export default class AdminStore {
  constructor() {
    this._buttons = {
      buttonText: 'Добавить новость',
      secondaryButtonText: 'Добавить товар'
    }
    this._deviceModalData = {
      header: {
        title: 'Создать новый товар',
        image: {
          url: 'icons/close.png',
          height: 45,
        },
      },
      inputs: [
        {
          placeholder: 'Введите название',
          title: 'Введите название:',
          image: {
            url: 'icons/admin/text.png',
            height: 25,
          },
        },
        {
          placeholder: 'Введите стоимость',
          title: 'Введите стоимость (руб.):',
          type: 'number',
          image: {
            url: 'icons/admin/money.png',
            height: 25,
          },
        },
        {
          placeholder: 'Введите стоимость',
          title: 'Введите стоимость (коп.):',
          type: 'number',
          image: {
            url: 'icons/admin/money.png',
            height: 25,
          },
        },
      ],
      typeInput: {
        list: 'list',
        id: 'list',
        image: {
          url: 'icons/admin/type.png',
          height: 25,
        },
        text: 'Выберите тип',
      },
    }
    this._news = {
      header: {
        title: 'Создать новую новость',
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

  get deviceModalData() {
    return this._deviceModalData
  }

  get news() {
    return this._news
  }
}
