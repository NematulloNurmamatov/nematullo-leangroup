import React, { Component } from 'react'
import "./home.scss"

class Home extends Component {
    render() {
        return <section>
            <div className='n__bg'>
                <div className="container">
                    <br /><br />
                    <p>LEANGROUP - тубы и этикетки</p>
                    <h1 className='n__home__h1'>Ламинатные тубы</h1>
                    <p className='n__home__p'>Используются для производства зубных паст. Широко применяются в <br /> сегменте косметики, пищевой индустрии, парафармацевтике, бытовой <br /> химии и DIY (Do-it-Yourself).</p>
                    <button className='n__home__button'>Каталог</button>
                </div>
            </div>
        </section>;
    }
}

export default Home;
