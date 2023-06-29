import React from 'react';
import s from './Reproduction.module.scss';


import AMUR from '../../img/content/1.jpg';
import DOG from '../../img/content/2.jpg';
import PROC from '../../img/content/3.jpg';
import ROSE from '../../img/content/4.jpg';
import BIRD from '../../img/content/5.jpg';
import FISH from '../../img/content/6.jpg';

const Reproduction = () => {
    const pictures = [
        {
            id: 1,
            img: AMUR,
            author: 'Марсель Руссо',
            name: 'Охота Амура',
            method: 'Холст, масло (50х80)',
            price: '14 500 руб',
            desc: 'Картина Марсель Руссо 14 500руб'
        },
        {
            id: 2,
            img: DOG,
            author: 'Анри Селин',
            name: 'Дама с собачкой',
            method: 'Акрил, бумага (50х80) ',
            price: '16 500 руб',
            desc: 'Анри Селин 16 500 руб'
        },
        {
            id: 3,
            img: PROC,
            author: 'Франсуа Дюпон',
            name: 'Процедура',
            method: 'Цветная литография (40х60) ',
            price: '20 000 руб',
            desc: 'Франсуа Дюпон 20 000 руб'
        },
        {
            id: 4,
            img: ROSE,
            author: 'Франсуа Дюпон',
            name: 'Процедура',
            method: 'Цветная литография (40х60) ',
            price: '20 000 руб',
            desc: 'Франсуа Дюпон 20 000 руб'
        },
        {
            id: 5,
            img: BIRD,
            author: 'Франсуа Дюпон',
            name: 'Процедура',
            method: 'Цветная литография (40х60) ',
            price: '20 000 руб',
            desc: 'Франсуа Дюпон 20 000 руб'
        },
        {
            id: 6,
            img: FISH,
            author: 'Франсуа Дюпон',
            name: 'Процедура',
            method: 'Цветная литография (40х60) ',
            price: '20 000 руб',
            desc: 'Франсуа Дюпон 20 000 руб'
        },
    ];


    return (
        <section className={s.reproduction}>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.titleBox}>
                        <div className={s.title}>
                            <h3>Репродукции</h3>
                        </div>
                        <div className={s.tabs}>
                            <div>
                                <button className={s.tabBtn}>Франция</button>
                                <button className={s.tabBtn}>Германия</button>
                                <button className={s.tabBtn}>Англия</button>
                            </div>
                        </div>
                    </div>

                    <div className={s.innerItem}>

                        {pictures.map(pic =>{
                            return(
                                <div id={pic.id} className={s.item}>
                                    <div className={s.img}>
                                        <img src={pic.img} alt={pic.desc}/>
                                    </div>
                                    <div className={s.author}>
                                        {pic.author}
                                    </div>
                                    <div className={s.name}>
                                        {pic.name}
                                    </div>
                                    <div className={s.method}>
                                        {pic.method}
                                    </div>
                                    <div className={s.price}>
                                        {pic.price}
                                    </div>
                                    <div className={s.basketBtnBox}>
                                        <button className={s.basketBtn}>
                                            В корзину
                                        </button>
                                    </div>
                                </div>)
                        }

                                                )}
                        {/*<div className={s.item}>*/}
                        {/*    <div className={s.img}>*/}
                        {/*        <img src={AMUR} alt={pictures.desc}/>*/}
                        {/*    </div>*/}
                        {/*    <div className={s.author}>*/}
                        {/*        Марсель Руссо*/}
                        {/*    </div>*/}
                        {/*    <div className={s.name}>*/}
                        {/*        Охота Амура*/}
                        {/*    </div>*/}
                        {/*    <div className={s.method}>*/}
                        {/*        Холст, масло (50х80)*/}
                        {/*    </div>*/}
                        {/*    <div className={s.price}>*/}
                        {/*        14 500 руб*/}
                        {/*    </div>*/}
                        {/*    <div className={s.basketBtnBox}>*/}
                        {/*        <button className={s.basketBtn}>*/}
                        {/*            В корзину*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={s.item}>*/}
                        {/*    <div className={s.img}>*/}
                        {/*        <img src={AMUR} alt={pictures.desc}/>*/}
                        {/*    </div>*/}
                        {/*    <div className={s.author}>*/}
                        {/*        Марсель Руссо*/}
                        {/*    </div>*/}
                        {/*    <div className={s.name}>*/}
                        {/*        Охота Амура*/}
                        {/*    </div>*/}
                        {/*    <div className={s.method}>*/}
                        {/*        Холст, масло (50х80)*/}
                        {/*    </div>*/}
                        {/*    <div className={s.price}>*/}
                        {/*        14 500 руб*/}
                        {/*    </div>*/}
                        {/*    <div className={s.basketBtnBox}>*/}
                        {/*        <button className={s.basketBtn}>*/}
                        {/*            В корзину*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={s.item}>*/}
                        {/*    <div className={s.img}>*/}
                        {/*        <img src={AMUR} alt={pictures.desc}/>*/}
                        {/*    </div>*/}
                        {/*    <div className={s.author}>*/}
                        {/*        Марсель Руссо*/}
                        {/*    </div>*/}
                        {/*    <div className={s.name}>*/}
                        {/*        Охота Амура*/}
                        {/*    </div>*/}
                        {/*    <div className={s.method}>*/}
                        {/*        Холст, масло (50х80)*/}
                        {/*    </div>*/}
                        {/*    <div className={s.price}>*/}
                        {/*        14 500 руб*/}
                        {/*    </div>*/}
                        {/*    <div className={s.basketBtnBox}>*/}
                        {/*        <button className={s.basketBtn}>*/}
                        {/*            В корзину*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reproduction;