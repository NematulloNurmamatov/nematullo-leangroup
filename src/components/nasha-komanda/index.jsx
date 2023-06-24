import React, { Component } from 'react'
import "./nasha-komanda.scss"
import man1 from "../../assets/images/n__man1.png";
import man2 from "../../assets/images/n__man2.png";
import man3 from "../../assets/images/n__man3.png";
import man4 from "../../assets/images/n__man4.png";
import man5 from "../../assets/images/n__man5.png";

class NashaKomanda extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className='n__nasha_komanda'>
                        <h1 className='n__nasha__h1'>Наша <span>команда</span></h1>
                        <div className='n__fleks'>
                            <div className='n__bir'>
                                <img src={man1} alt="" />
                                <h4 className='n__h4'>Войнич Дарья</h4>
                                <p className='n__p2'>Заместитель директора по продажам</p>
                                <p className='n__p3'>+375 17 270-53-77 317</p>
                            </div>
                            <div className='n__bir'>
                                <img src={man2} alt="" />
                                <h4 className='n__h4'>Мисько Екатерина</h4>
                                <p className='n__p2'>Начальник отдела сопровождения</p>
                                <p className='n__p3'>+375 (17) 270-53-77 (115)</p>
                                <p className='n__p3'> +375 29 112-73-48</p>
                                <p className='n__p4'>k.melnichenko@leangroup.by</p>
                            </div>
                            <div className='n__bir'>
                                <img src={man3} alt="" />
                                <h4 className='n__h4'>Дмитроченко Дмитрий</h4>
                                <p className='n__p2'>Начальник отдела допечатной подготовки</p>
                                <p className='n__p3'>+375 (17) 270-53-77 (333)</p>
                                <p className='n__p3'> +375 29 360-32-26</p>
                                <p className='n__p4'>dmitrochenko@leangroup.by</p>
                            </div>
                            <div className='n__bir'>
                                <img src={man4} alt="" />
                                <h4 className='n__h4'>Антух Евгений</h4>
                                <p className='n__p2'>Начальник отдела снабжения</p>
                                <p className='n__p3'>+375 (17) 270-53-77 (148)</p>
                                <p className='n__p3'> +375 44 764-16-28</p>
                                <p className='n__p4'>j.antuh@leangroup.by</p>
                            </div>
                            <div className='n__bir'>
                                <img src={man5} alt="" />
                                <h4 className='n__h4'>Мисник Елена</h4>
                                <p className='n__p2'>Специалист по работе c клиентами</p>
                                <p className='n__p3'>+375 (17) 270-53-77 (322)</p>
                                <p className='n__p3'> +375 29 329-34-03</p>
                                <p className='n__p4'>e.misnik@leangroup.by</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default NashaKomanda;
