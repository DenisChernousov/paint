import React from 'react';
import s from './Header.module.scss';
import BIRD from '../../img/bird.png';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <section className={s.header}>
<div className="container">
    <div className={s.inner}>
        <div className={s.left}>
            <img src={BIRD}/>
        </div>
        <div className={s.right}>
            <h1 className={s.title}>
                Реплики картин от <Link className={s.link} to="">Ink. House</Link>
            </h1>
            <h2 className={s.subtitle}>
                Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.
            </h2>
            <div className={s.btn}>
                <Link to="/">
                    Продукция
                </Link>
            </div>
        </div>
    </div>
</div>
        </section>
    );
};

export default Header;