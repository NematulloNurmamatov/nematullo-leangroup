import React from 'react';
import logo_foter from '../../assets/images/lg.png'
import wk_foter from '../../assets/images/vk.png'
import fb_foter from '../../assets/images/fb.png'
import link_foter from '../../assets/images/linkedin.png'
import line from '../../assets/images/Line 6.png'
import vektor from '../../assets/images/Vector(1).png'

import './footer.scss'

const Footer = () => {
    const top = () => {
        window.scrollTo(0, 0)
    }
    return (
        <section className='S__All'>
            <footer className='container'>
                <div className='footer_logo'>
                    <img src={logo_foter} alt="" />
                    <div className='lg_wk'>
                        <img src={wk_foter} alt="" />
                        <img src={fb_foter} alt="" />
                        <img src={link_foter} alt="" />
                    </div>
                </div>
                <img className='line' src={line} alt="" />

                <div className='Yon-yon'>
                    <div className='yong'>
                        <div>
                            <h2>Продукция</h2><br />
                            <p>Ламинатные тубы</p>
                            <p>Экструзионные тубы</p>
                            <p>Другая упаковка</p>
                        </div>

                        <div>
                            <h2>Компания</h2><br />
                            <p>О нас</p>
                            <p>Наша команда</p>
                            <p>Сертификаты</p>
                        </div>

                        <div>
                            <h2>Разделы</h2><br />
                            <p>Контакты</p>
                            <p>Новости</p>
                            <p>Вакансии</p>
                        </div>
                    </div>
                    <div className='y'>
                        <div className='yonga'>
                            <div>
                                <h3>Беларусь</h3><br />
                                <p>+375 (17) 270 53 77</p>
                                <p>+375 (17) 270 53 78</p>
                            </div>

                            <div>
                                <h3>Европа</h3><br />
                                <p>+48 73 1111 044</p>
                            </div>
                        </div><br /><br />
                        <div className='yonga'>
                            <div>
                                <h3>Москва</h3><br />
                                <p>+7 (495) 280 73 44</p>
                                <p>+7 (495) 280 73 44</p>
                            </div>

                            <div>
                                <h3>Екатеринбург</h3><br />
                                <p>+7 (343) 346 82 06</p>
                            </div>
                        </div>
                        <br /><br />
                    </div>
                    <span className='as'>© 2022 Leangroup. All Rights Reserved. <br /> Разработка и продвижение сайтов SkyWeb.by</span>

                    <p className='back' onClick={top}>
                        <img src={vektor} alt="" />
                    </p>


                </div>
            </footer>
        </section>
    );
};



export default Footer;