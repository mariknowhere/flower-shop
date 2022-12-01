export default class AdminStore {
  constructor() {
    this._buttons = {
      newsButtonText: 'Добавить новость',
      deviceButtonText: 'Добавить товар',
      typeButtonText: 'Добавить тип'
    }
    this._deviceModalData = {
      header: {
        title: 'Создать новый товар',
        image: {
          url: 'icons/close.png',
          height: 45,
        },
      },
      titleInput: {
        placeholder: 'Введите название',
        title: 'Введите название:',
        image: {
          url: 'icons/admin/text.png',
          height: 25,
        },
      },
      priceRublesInput: {
        placeholder: 'Введите стоимость',
        title: 'Введите стоимость (руб.):',
        image: {
          url: 'icons/admin/money.png',
          height: 25,
        },
      },
      priceCentsInput: {
        placeholder: 'Введите стоимость',
        title: 'Введите стоимость (коп.):',
        image: {
          url: 'icons/admin/money.png',
          height: 25,
        },
      },
      typeInput: {
        list: 'list',
        id: 'list',
        image: {
          url: 'icons/admin/type.png',
          height: 25,
        },
        text: 'Выберите тип',
      },
      imageInput: {
        title: 'Выберите изображение:',
        accept: 'image/*',
        name: 'input-file',
      },
      buttonText: 'Добавить товар',
      compound: {
        name: {
          placeholder: 'Название...',
          name: 'product'
        },
        count: {
          placeholder: 'Количество...',
          name: 'count',
        },
        buttonText: ''
      }
    }
    this._news = {
      header: {
        title: 'Создать новую новость',
        image: {
          url: 'icons/close.png',
          height: 45,
        },
      },
      titleInput: {
        title: 'Введите заголовок:',
        placeholder: 'Введите заголовок...',
        image: {
          url: 'icons/admin/text.png',
          height: 25,
        },
      },
      descriptionInput: {
        title: 'Введите сообщение:',
        id: 'description'
      },
      dateInput: {
        title: 'Выберите дату:',
        image: {
          url: 'icons/date.png',
          height: 25,
        }
      },
      imageInput: {
        title: 'Выберите изображение:',
        accept: 'image/*',
        id: 'input-file',
      },
      buttonText: 'Опубликовать новость',
    }
    this._type = {
      header: {
        title: 'Создать новый тип',
        image: {
          url: 'icons/close.png',
          height: 45,
        },
      },
      input: {
        title: 'Введите название:',
        placeholder: 'Введите название...',
        image: {
          url: 'icons/admin/text.png',
          height: 25,
        },
      },
      buttonText: 'Создать тип',
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

  get type() {
    return this._type
  }
}
