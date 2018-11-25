import React, { Component } from 'react';
import SVGComponent from './Components/svg';
import './Welcome.scss';

export default class Welcome extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="backdrop" />
                <div className="greeting">
                    <SVGComponent className="svg-logo" fill="#ad974f" />
                    <div className="name">Nathan Schneider</div>
                    <div className="title">Web Developer</div>
                </div>
            </div>
        );
    }
}
