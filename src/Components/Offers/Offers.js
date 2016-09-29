import React, { Component } from 'react'
import Offer from '../Offer'
import style from './Offers.css'
import OfferService from '../../Services/OfferService'

export default class Offers extends Component {
    constructor() {
        super()
        this.state = {}
        this.fetchOffers = this.fetchOffers.bind(this)
    }

    fetchOffers() {
        OfferService.fetchOffers()
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                this.setState({ offers: data })
            })
    }

    componentWillMount() {
        let { offers } = this.state
        if (!offers) this.fetchOffers()
    }

    render() {
        let { offers } = this.state
        if (!offers) {
            return (
                <div className={ style.loader }></div>
            )
        }
        return (
            <div className={ style.offers }>
                <div className={ style.logo }></div>
                <div className={ style.inner }>
                    <div className={ style.greetings }>
                        <div className={ style.name }>Здравствуйте, Лев!</div>
                        <div className={ style.desc }>
                            Мы выбрали для вас самые интересные<br/>кредитные предложения
                        </div>
                    </div>
                    {
                        offers.top.map(function (item, index) {
                            return (
                                <Offer offer={ item } key={ index } mod="top"/>
                            )
                        })
                    }
                    <div className={ style.also }>Вам также могут понравится</div>
                    {
                        offers.bottom.map(function (item, index) {
                            return (
                                <Offer offer={ item } key={ index } mod="bottom" />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
