import React, { Component } from 'react';
import "./nasha.scss"
import krem1 from "../../assets/images/n__krem1.png";
import krem2 from "../../assets/images/n__krem2.png";
import krem3 from "../../assets/images/n__krem3.png";
import krem4 from "../../assets/images/n__krem4.png";
import krem5 from "../../assets/images/n__krem5.png";


class Nasha extends Component {
  render() {
    return <section>
      <div className="container">
        <div className='n__nasha'>
          <h1 className='n__h1'>Наша <span className='n__span'>продукция</span></h1>
          <div className='n__button'>
            <div>
              <button>Ламинатные тубы</button>
            </div>
            <div className='n__urta'>
              <button>Экструзионные тубы</button>
            </div>
            <div>
              <button>Другая упаковка</button>
            </div>
          </div>
          <div className='n__images'>
            <div>
              <img src={krem1} alt="" />
            </div>
            <div>
              <img src={krem2} alt="" />
            </div>
            <div>
              <img src={krem3} alt="" />
            </div>
            <div>
              <img src={krem4} alt="" />
            </div>
            <div>
              <img src={krem5} alt="" />
            </div>
          </div>
          <div className='n__buttonnechidir'>
            <button>Перейти в каталог</button>
          </div>
        </div>
      </div>
    </section>;
  }
}

export default Nasha;


