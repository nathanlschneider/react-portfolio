// todo - Alphabetize css classes

import React, { Component } from 'react';
import './Logo.scss';

export default class Logo extends Component {
    componentDidMount() {
        let line = document.querySelector('.line');
        let name = document.querySelector('.name');
        let firstLoad = true;
        window.addEventListener('scroll', e => {
            console.log(window.scrollY);
            if (window.scrollY < 900 && firstLoad === false) {
                line.classList.add('lineFold');
                line.classList.remove('lineUnFold');
                name.classList.remove('slideOut');
                name.classList.add('slideInAndDelay');
            }

            if (window.scrollY > 900) {
                firstLoad = false;
                line.classList.remove('lineFold');
                line.classList.add('lineUnFold');
                name.classList.add('slideOut');
            }
        });
    }

    render() {
        return (
            <div className="logoWrapper">
                <div className="logo" />
                <div className="cover" />
                <div className="line">
                    <div className="bar" />
                    <div className="bar" />
                    <div className="bar" />
                </div>
                <div className="name">
                    <span className="firstName"> Nathan </span>
                    <span className="lastName"> Schneider </span>
                </div>
            </div>
        );
    }
}
