export default class PaymentStore {
  constructor() {
    this._navigator = {
      title: 'Способы оплаты',
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
    this._topic = 'Оплата'
    this._table = {
      head: {
        items: [
          {
            category: '№',
            id: 1,
          },
          {
            category: 'Вид оплаты',
            id: 2,
          },
          {
            category: 'Инструкция по оплате',
            id: 3,
          },
        ],
      },
      body: {
        title: 'Наличный и безналичный платёж',
        categoryValuesPrimary: [
          {
            categoryValue: '1',
            id: 1,
          },
          {
            categoryValue: 'Наличный расчет при получении товара',
            id: 2,
          },
          {
            categoryValue: '-',
            id: 3,
          },
        ],
        categoryValuesSecondary: [
          {
            categoryValue: '2',
            id: 1,
          },
          {
            categoryValue: 'Безналичный расчет при получении товара',
            id: 2,
          },
          {
            categoryValue: '-',
            id: 3,
          },
        ],
        inCitySecond: {
          number: '2',
          delivery: 'На сумму ниже 80 рублей',
          price: '10 рублей',
        },
        titleSecondary: 'Онлайн оплата ',
        titleSecondaryAddition: 'обсуждается индивидуально ',
      }
    }
    this._title = 'Для оформления заказа через сайт Вам необходимо:'
    this._list = [
      {
        text: 'выбрать понравившийся товар',
        id: 1,
      },
      {
        text: 'выбрать его количество и добавить в корзину',
        id: 2,
      },
      {
        text: 'перейти в корзину',
        id: 3,
      },
      {
        text: 'выбрать подходящий способ оплаты',
        id: 4,
      },
      {
        text: 'указать ваши контактные данные в специальной форме: имя, номер телефона, электронную почту и адрес доставки',
        id: 5,
      },
      {
        text: 'в разделе "Комментарии" вы можете оставить ваши пожелания по времени доставки и задать интересующие вопросы по товару',
        id: 6,
      },
      {
        text: 'нажать кнопку "Оформить заказ"',
        id: 7,
      },
    ]
  }

  get navigator() {
    return this._navigator
  }

  get topic() {
    return this._topic
  }

  get table() {
    return this._table
  }

  get title() {
    return this._title
  }

  get list() {
    return this._list
  }
}
