import React from 'react';
import logoFooter from '../../images/logo_footer_kasa.svg';

function Footer() {
    return (
        <footer className='footer'>
            <img src={logoFooter} alt='Logo Kasa' className='footer_img'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;