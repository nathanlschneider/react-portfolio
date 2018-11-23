import React, { Component } from 'react';
import './NavBar.scss';
import Logo from './Components/Logo';
import NavLinks from './Components/NavLinks';

export default class NavBar extends Component {
    render() {
        return (
            <header>
                <nav>
                    <Logo />
                    <NavLinks />
                </nav>
            </header>
        );
    }
}
