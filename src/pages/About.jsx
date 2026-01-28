import React from 'react';
import Header from '../components/Layout/Header';
import Banner from '../components/Layout/Banner';
import Collapses from '../components/Layout/Collapses';
import Values from '../data/values.json';
import Footer from '../components/Layout/Footer';
import imgBackground from '../images/img_about_banner.webp';

function About() {
    return(
        <section>
            <div className='about'>
                <Header />
                <Banner imgBackground={imgBackground}/>
                <div className='about_collapses'>
                    <Collapses data={Values} />
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default About;