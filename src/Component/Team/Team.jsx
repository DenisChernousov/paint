import React from 'react';
import s from './Team.module.scss'

import BRUSH from '../../img/brush.png';
import TEAM1 from '../../img/team1.jpg';
import TEAM2 from '../../img/team2.jpg';
import TEAM3 from '../../img/team3.png';

const Team = () => {
    return (
        <section className={s.team}>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.left}>
                        <img src={BRUSH} alt=""/>
                    </div>
                    <div className={s.right}>
                        <div className={s.title}>
                            <h3>Наша команда</h3>
                        </div>
                        <div className={s.info}>
                            Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить
                            значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены
                            отталкиваться от того, что консультация с широким активом.
                        </div>
                        <div className={s.teamImg}>
                            <img src={TEAM1} alt="Woman"/>
                            <img src={TEAM2} alt="Man one"/>
                            <img src={TEAM3} alt="Man two"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;