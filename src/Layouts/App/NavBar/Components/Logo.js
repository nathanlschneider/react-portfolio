// todo - Alphabetize css classes

import React, { Component } from 'react';
import './Logo.scss';

export default class Logo extends Component {
    componentDidMount() {
        const line = document.querySelector('.line');
        const name = document.querySelector('.logo-name');
        let firstLoad = true;
        const hideBars = () => {
            line.classList.add('lineFold');
            line.classList.remove('lineUnFold');
            name.classList.remove('slideOut');
            name.classList.add('slideInAndDelay');
        };
        const showBars = () => {
            line.classList.remove('lineFold');
            line.classList.add('lineUnFold');
            name.classList.add('slideOut');
        };
        window.addEventListener('resize', () => {
            console.log(window.innerWidth);
            window.innerWidth > 501 ? hideBars() : showBars();
        });
        window.addEventListener('scroll', () => {
            if (window.scrollY < 900 && firstLoad === false) {
                hideBars();
            }

            if (window.scrollY > 900) {
                firstLoad = false;
                showBars();
            }
        });
    }

    render() {
        return (
            <div className="logo-wrapper">
                <div className="logo" />
                <div className="cover" />
                <div className="line">
                    <div className="bar" />
                    <div className="bar" />
                    <div className="bar" />
                </div>
                <div className="logo-name">
                    <span className="first-name"> Nathan </span>
                    <span className="last-name"> Schneider </span>
                </div>
            </div>
        );
    }
}
