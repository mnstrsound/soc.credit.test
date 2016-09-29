import React, { Component } from 'react'
import style from './Offer.css'

export default class Offer extends Component {
    render() {
        let { offer, mod } = this.props
        let styles = style.offer + ' '
        styles += mod === 'top' ? style.top : style.bottom
        return(
            <div className={ styles }>
                <div className={ style.logo }>
                    <img src={ '/assets/logo/' + offer.contractor.logo } alt="" />
                </div>
                <div className={ style.info }>
                    <div className={ style.name }>{ offer.name }</div>
                    <div className={ style.desc }>{ offer.minDuration } – { offer.maxDuration } месяцев | <span className={ style.interest }>{ offer.interestRate }% в год</span></div>
                    <div className={ style.description }>{ offer.description }</div>
                    <a href="" className={ style.more }>подробнее</a>
                </div>
            </div>
        )
    }
}
