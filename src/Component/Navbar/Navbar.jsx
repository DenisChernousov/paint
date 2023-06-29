import React from 'react';
import s from './Navbar.module.scss';
import LOGO from '../../img/logo.svg';
import BASKET from '../../img/basket.svg';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.logoSection}>
                        <Link to="/"><img src={LOGO}/>Ink. House</Link>
                    </div>
                    <div className={s.navInner}>
                        <ul className={s.links}>
                            <li className={s.link}><Link to="/">Репродукции</Link></li>
                            <li className={s.link}><Link to="/">Новинки</Link></li>
                            <li className={s.link}><Link to="/">О нас</Link></li>
                            <li className={s.link}><Link to="/"><img src={BASKET}/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;