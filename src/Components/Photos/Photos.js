import React, { Component } from 'react'
import style from './Photos.css'

export default class Photos extends Component {
    render() {
        let { src } = this.props
        return (
            <div className={ style.photos }>
                <div className={ style.photo }>
                    <img src={ src } alt="" />
                </div>
                <div className={ style.photo }>
                    <img src={ src } alt="" />
                </div>
                <div className={ style.photo }>
                    <img src={ src } alt="" />
                </div>
                <div className={ style.photo }>
                    <img src={ src } alt="" />
                </div>
            </div>
        )
    }
}