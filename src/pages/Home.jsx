import React from 'react';
import Header from '../components/Layout/Header';
import Banner from '../components/Layout/Banner';
import Accommodations from '../data/accommodations.json';
import Gallery from '../components/Home/Gallery';
import Footer from '../components/Layout/Footer';
import imgBackground from '../images/img_home_banner.webp';

function Home() {
    return(
        <section>
            <div className='home'>
                <Header />
                <Banner title='Test' imgBackground={imgBackground} />
                <Gallery accommodations={Accommodations}/>
            </div>
            <Footer />
        </section>
    )
}

export default Home;