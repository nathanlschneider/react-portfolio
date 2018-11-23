import React, { Component } from 'react';
import './App.scss';
import NavBar from './NavBar/NavBar';
import AboutMe from './AboutMe/AboutMe';
// import Footer from './Footer/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <AboutMe />
            </div>
        );
    }
}

export default App;
