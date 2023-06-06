import React, { Component } from 'react'
import '../../css/firstPage/footer.css'

export default class footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer_1'>
        <div className='footer_card'>
          <div className='box_1'>
            <a href=""><p>Моя учетная запись</p></a>
            <a href="">Войти или зарегистрироваться</a>
          </div>
          <div className='box_1'>
            <a href=""><p>Интернет магазин</p></a>
            <ul>
              <li><a href="">О нас</a></li>
              <li><a href="">Жалобы и предложения</a></li>
              <li><a href="">Торговые марки</a></li>
              <li><a href="">Карта сайта</a></li>
              <li><a href="">Блог</a></li>
            </ul>
          </div>
          <div className='box_1'>
            <a href=""><p> Покупательский сервис</p></a>
            <ul>
              <li><a href="">Ваши заказы</a></li>
              <li><a href="">Отложенные</a></li>
              <li><a href="">Список сравнения</a></li>
              <li><a href="">Статус рассрочки</a></li>
              <li><a href="">Подарочные сертификаты</a></li>
              <li><a href="">Программа лояльности клиенто</a></li>
            </ul>
          </div>
          <div className='box_1'>
            <a href=""><p>Информация</p></a>
            <ul>
              <li><a href="">Адрес магазинов</a></li>
              <li><a href="">Оплата и доставка</a></li>
              <li><a href="">Условия рассрочки</a></li>
              <li><a href="">О персональных данных</a></li>
              <li><a href="">Возврат и обмен товаров</a></li>
              <li><a href="">Cashback</a></li>
              <li><a href="">Оферта</a></li>
            </ul>
          </div>
          <div className='box_1'>
            <a href=""><p>Контакты</p></a>
            <ul>
              <li><a href="">г. Ташкент, Абдулла Кодирий 36Б</a></li>
              <li><a href="">+998-71-203-1203</a></li>
              <li><a href="">+998-33-203-1203</a></li>
              <li><a href="">Пн-Вс 9.00 - 18.00</a></li>
              <li><a href="">admin@elmakon.uz</a></li>
              <li><a href="">Посмотреть на карте</a></li>
            </ul>
          </div>

        </div>
      </div>
      <div className='footer_child'>
        <p>© 2017 - 2023 OOO "BM ELMAKON". Elmakon</p>
      </div>
      </div>
     
    )
  }
}
