import React, { Component } from 'react';
import './NavLinks.scss';

export default class NavLinks extends Component {
    render() {
        return (
            <div className="container">
                <div>About</div>
                <div>Projects</div>
                <div>Contact</div>
            </div>
        );
    }
}
