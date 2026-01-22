import React from 'react';
import Header from '../components/Layout/Header';
import AboutBanner from '../components/About/AboutBanner';
import Collapses from '../components/Layout/Collapses';
import Values from '../data/values.json';
import Footer from '../components/Layout/Footer';

function About() {
    return(
        <section>
            <div className='about'>
                <Header />
                <AboutBanner />
                <div className='about_collapses'>
                    <Collapses data={Values} />
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default About;