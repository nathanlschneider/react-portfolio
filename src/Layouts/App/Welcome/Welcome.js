import React, { Component } from 'react';
import SVGComponent from './Components/svg';
import './Welcome.scss';

export default class Welcome extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="backdrop" />
                <div className="greeting">
                    <SVGComponent className="svg-logo" />
                    <div className="greeting-name">Nathan Schneider</div>
                    <div className="greeting-title">Web Developer</div>
                    <div className="down-arrow">
                        <div className="left-bar" />
                        <div className="right-bar" />
                    </div>
                </div>
            </div>
        );
    }
}
