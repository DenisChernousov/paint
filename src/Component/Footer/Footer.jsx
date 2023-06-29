import React from 'react';
import {Link} from 'react-router-dom';
import s from './Footer.module.scss';
import LOGO from '../../img/logo.svg';
import fb from '../../img/fb.svg';
import inst from '../../img/inst.svg';
import yt from '../../img/yt.svg';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.left}>
                        <div className={s.logoInner}>
                            <img src={LOGO}/> <p className={s.logoText}>Ink. House</p>
                        </div>
                        <div className={s.contact}>
                            <Link to="/" className={s.tel}>+7 (999) 543-54-54</Link>
                        </div>
                        <div className={s.item}>
                            Мастерская
                        </div>
                    </div>
                    <div className={s.middle}>
                        <div className={s.itemMid}>
                            <div className={s.title}>
                                Репродукции
                            </div>
                            <div className={s.list}>
                                <ul>
                                    <li><Link to="/">Франция</Link></li>
                                    <li><Link to="/">Германия</Link></li>
                                    <li><Link to="/">Англия</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.itemMid}>
                            <div className={s.title}>
                                Новинки
                            </div>
                            <div className={s.list}>
                                <ul>
                                    <li><Link to="/">2021</Link></li>
                                    <li><Link to="/">2022</Link></li>
                                    <li><Link to="/">2023</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.itemMid}>
                            <div className={s.title}>
                                О нас
                            </div>
                            <div className={s.list}>
                                <ul>
                                    <li><Link to="/">Художники</Link></li>
                                    <li><Link to="/">Менеджеры</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={s.right}>
                        <div className={s.social}>
                            <ul>
                                <li>
                                    <a href="/"> <img src={fb}/></a>
                                </li>
                                <li>
                                    <a href="/"> <img src={inst}/></a>
                                </li>
                                <li>
                                    <a href="/"> <img src={yt}/></a>
                                </li>
                            </ul>
                        </div>
                        <div className={s.jur}>
                            <span>Ink. House ®</span>
                            <span>All rights reserved</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;