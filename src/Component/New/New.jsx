import React from 'react';
import {Link} from 'react-router-dom';
import STAR from '../../img/star.svg';

import s from './New.module.scss';

const New = () => {
    return (
        <section className={s.new}>
            <div className="container">
                <div className={s.title}>
                    <img src={STAR} className={s.img}/>
                    <h3>Новая коллекция французских авторов</h3>
                </div>
                <div className={s.info}>
                    <p>Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в
                        свою очередь, должны быть заблокированы в рамках своих собственных рациональных
                        ограничений. <br/><br/>
                    Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую
                        востребованность направлений прогрессивного развития.</p>
                </div>
                <Link to="/" className={s.link}>
                    Ознакомиться
                </Link>
            </div>
        </section>
    );
};

export default New;