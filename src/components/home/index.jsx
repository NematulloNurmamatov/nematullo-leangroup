import React, { Component } from 'react'
import "./home.scss"

import iconka1 from "../../assets/images/n__png.png"
import iconka2 from "../../assets/images/n__fb.png"
import iconka3 from "../../assets/images/n__linkedin.png"

class Home extends Component {
    render() {
        return <section>
            <div className='n__bg'>
                <div className="container prosta">
                <br /><br /><br />
                    <p>LEANGROUP - тубы и этикетки</p>
                    <h1 className='n__home__h1'>Ламинатные тубы</h1>
                    <p className='n__home__p'>Используются для производства зубных паст. Широко применяются в <br /> сегменте косметики, пищевой индустрии, парафармацевтике, бытовой <br /> химии и DIY (Do-it-Yourself).</p>
                    <button className='n__home__button'>Каталог</button>
                    <div className='iconka'>
                        <div>
                            <a href="https://najottalim.uz/"><img src={iconka1} alt="" /></a>
                        </div>
                        <br />
                        <div>
                           <a href="https://najottalim.uz/"> <img src={iconka2} alt="" /></a>
                        </div>
                        <br />
                        <div>
                            <a href="https://najottalim.uz/"><img src={iconka3} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>;
    }
}

export default Home;
