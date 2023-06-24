import React, { Component } from 'react'
import name from "../../assets/images/n__name.png";
import icon from "../../assets/images/n__icon.png"

import "./informatsiyu.scss"

class Informatsiyu extends Component {
  render() {
    return <section>
      <div className="container">
        <div className='n__infor'>
          <div className='informatsiyu'>
            <h1 className='n__pol'>Получить подробную <span>информацию</span></h1>
            <p className='n__pi'>Просто заполните форму, наш менеджер свяжетсяс вами в ближайшее время</p>
            <div className='n__fleks'>
              <div className='n__fleks2'>
                <div className='n__fleks3'>
                  <div>
                    <img src={name} alt="" />
                  </div>
                  <div>
                    <input type="text" placeholder='Ваше имя' />
                  </div>
                </div>
                <div className='n__fleks4'>
                  <div>
                    <img src={icon} alt="" />
                  </div>
                  <div>
                    <input type="number" placeholder='+375 (29) 0000000' />
                  </div>
                </div>
              </div>
              <br /><br /><br /> <br />
              <div className='n__textarea'>
                <textarea name="" id="" cols="100%" rows="10"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
}

export default Informatsiyu;
