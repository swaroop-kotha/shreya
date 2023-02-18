import React, { useState } from 'react';
import './Header.css';
import CART from '../../images/icons/shopping-bag.png';
import SEARCH from '../../images/icons/search-interface-symbol.png';
import LOGO from '../../images/logo/google.png';

function Header() {
    const menu__items = ['home', 'pages', 'portfolio', 'blog', 'shop', 'contact'];
    const [menu, setMenu] = useState(menu__items)

    return (
        <nav className='navbar__section'>
            <div className='container'>
                <div className='row justify-content-between align-items-center py-4'>
                    <div className='col-auto'>
                        <img src={LOGO}
                            width='36' alt='logo' />
                    </div>
                    <div className='col-auto'>
                        <div className='row'>
                            <div className='col-auto'>
                                <ul className='nav'>
                                    {
                                        menu && menu.length > 0
                                        &&
                                        menu.map((item, index) => {
                                            return (
                                                <li className={index === 0 ? `nav-item active`: `nav-item`} key={item}>
                                                    <a href='#' className='nav-link'>{item}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className='col-auto'>
                                <div className='row align-items-center'>
                                    <div className='col-auto'>
                                        <img src={CART} width='30' alt='cart' />
                                    </div>
                                    <div className='col-auto'>
                                        <img src={SEARCH} width='20' alt='search' />
                                    </div>
                                </div>
                            </div>
                            <div className='col-auto'>
                                <button className='btn__primary'>get in touch</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Header