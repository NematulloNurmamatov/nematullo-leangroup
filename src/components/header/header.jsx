import React, { Component } from 'react'
import logo from '../../assets/images/logo.png'
import line from '../../assets/images/Line 11.png'
import './header.scss'

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: false,
    }
  }
  render() {
    const openNavbar = () => {
      this.setState({ nav: !this.state.nav })
    }
    return (
      <div className='nav'>
        <header className='a container'>
          <div className='S__navv'>
            <div>
              <img src={logo} alt="" />
            </div>
            <ul>
              <li className='item'>
                <a href="https://www.instagram.com/samariddin_nurmamatov/">Продукция</a>
                <ul className="dropdown">
                  <li><a href="https://www.instagram.com/samariddin_nurmamatov/">Ламинатные тубы</a></li>
                  <li><a href="https://www.instagram.com/samariddin_nurmamatov/">Экструзионные тубы</a></li>
                  <li><a href="https://www.instagram.com/samariddin_nurmamatov/">Switzerla</a></li>
                  <li><a href="https://www.instagram.com/samariddin_nurmamatov/">Japan</a></li><br />
                </ul>
              </li>
              <img src={line} alt="" />
              <li>Сертификаты</li>
              <img src={line} alt="" />
              <li>Наша команда</li>
              <img src={line} alt="" />
              <li>О нас</li>
              <img src={line} alt="" />
              <li>Новости</li>
              <img src={line} alt="" />
              <li>Вакансии</li>
              <img src={line} alt="" />
              <li>Контакты</li>
            </ul>
          </div>
          <div className='bb'>
            <p><span>RU</span> / EN</p>
            <button onClick={openNavbar}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuras_I78qJJti5cOq4YVKIHQCg_PjVEq-8Q&usqp=CAU" alt="" /></button>
          </div>



          {this.state.nav ?

            <div className='S__navv_responcive'>
              <ul>
                <li className='item'>
                  <a href="https://www.instagram.com/samariddin_nurmamatov/">Продукция</a>

                </li>
                --------
                <li>Сертификаты</li>
                --------
                <li>Наша команда</li>
                --------
                <li>О нас</li>
                --------
                <li>Новости</li>
                --------
                <li>Вакансии</li>
                --------
                <li>Контакты</li>
              </ul>
            </div>
            : ""}
        </header>
      </div>
    )
  }
}

export default Header;