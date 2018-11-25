import React, { Component } from 'react';
import './App.scss';
import NavBar from './NavBar/NavBar';
import Welcome from './Welcome/Welcome';
import AboutMe from './AboutMe/AboutMe';
import Footer from './Footer/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Welcome />
                <AboutMe />
                <Footer />
            </div>
        );
    }
}

export default App;
