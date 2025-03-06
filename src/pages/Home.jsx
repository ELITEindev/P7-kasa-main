import React from 'react';
import Header from '../components/Layout/Header';
import HomeBanner from '../components/Home/HomeBanner';
import Accommodations from '../data/accommodations.json';
import Gallery from '../components/Home/Gallery';
import Footer from '../components/Layout/Footer';

function Home() {
    return(
        <section>
            <div className='home'>
                <Header />
                <HomeBanner />
                <Gallery accommodations={Accommodations}/>
            </div>
            <Footer />
        </section>
    )
}

export default Home;