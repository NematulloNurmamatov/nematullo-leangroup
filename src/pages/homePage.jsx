import React, { Fragment } from 'react'
import Header from '../components/header/header'
import Komponi from '../components/komponi'
import Sertifikat from '../components/sertifikat'
import Nasha from '../components/nasha'
import Informatsiyu from '../components/informatsiyu'
import NashaKomanda from '../components/nasha-komanda'
import Novosti from '../components/novosti'
import Footer from '../components/footer/footer'
import Home from '../components/home'


const HomePage = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <Home />
                <Komponi />
                <Sertifikat />
                <Nasha />
                <Informatsiyu />
                <NashaKomanda />
                <Novosti />
            </main>
            <Footer />
        </Fragment>
    )
}

export default HomePage