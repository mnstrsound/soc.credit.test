import React, { Component } from 'react'
import Photos from '../Photos'
import style from './Banner.css'
import { Link } from 'react-router'


export default class Banner extends Component {
    render() {
        return (
            <div className={ style.banner }>
                <div className={ style.logo }></div>
                <div className={ style.title }>
                    Узнайте свой кредитный лимит в 30+ банках
                </div>
                <div className={ style.accepted }>
                    <Photos src="assets/img/photo.jpg" />
                    <div className={ style.right }>
                        <div className={ style.name }>Лев, 28 лет</div>
                        <div className={ style.sum }>Одобрено <span className={ style.highlight }>117 000 руб.</span></div>
                        <div className={ style.options }>3-6 месяцев | 17% в год</div>
                        <div className={ style.bank }><img src="assets/img/bank.png" alt=""/></div>
                    </div>
                </div>
                <div className={ style.offer }>
                    Получите персональное предложение
                    <br/>с одобренной суммой кредита прямо сейчас!
                </div>
                <Link to='/variants' className={ style['get-offer'] }>Получить предложение</Link>
            </div>
        )
    }
}
