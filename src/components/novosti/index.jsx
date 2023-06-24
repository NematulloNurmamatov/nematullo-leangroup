import React, { Component } from 'react'
import "./novosti.scss"
import img1 from '../../assets/images/rasm1.png'
import img2 from '../../assets/images/rasm2.png'
import img3 from '../../assets/images/rasm3.png'

class Novosti extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className='S__text'>
                        <h2>Новости</h2>
                    </div>
                    <div className='S__box'>
                        <div className='S__card'>
                            <img src={img1} alt="" />
                            <span>28.01.2022</span>
                            <p>"ЛеанГрупп" серебряный призер EcoVadis!</p>
                        </div>
                        <div className='S__card'>
                            <img src={img2} alt="" />
                            <span>28.01.2022</span>
                            <p>""ЛеанГрупп" серебряный призер EcoVadis!!</p>
                        </div>
                        <div className='S__card'>
                            <img src={img3} alt="" />
                            <span>28.01.2022</span>
                            <p>"Туба, как вид упаковки!</p>
                        </div>
                    </div>
                    <div className='S__button'>
                        <button className='Bce'>Все новости</button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Novosti;
