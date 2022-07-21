export default class PaymentStore {
  constructor() {
    this.navigator = {
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
    this.topic = 'Оплата'
    this.table = {
      head: {
        items: [
          {
            category: '№',
          },
          {
            category: 'Вид оплаты',
          },
          {
            category: 'Инструкция по оплате',
          },
        ],
      },
      body: {
        title: 'Наличный и безналичный платёж',
        categoryValuesPrimary: [
          {
            categoryValue: '1',
          },
          {
            categoryValue: 'Наличный расчет при получении товара'
          },
          {
            categoryValue: '-'
          },
        ],
        categoryValuesSecondary: [
          {
            categoryValue: '2',
          },
          {
            categoryValue: 'Безналичный расчет при получении товара',
          },
          {
            categoryValue: '-',
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
    this.title = 'Для оформления заказа через сайт Вам необходимо:'
    this.list = [
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
}
