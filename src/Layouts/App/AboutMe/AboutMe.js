import React, { Component } from 'react';
import './AboutMe.scss';
export default class AboutMe extends Component {
    render() {
        return (
            <div className="about-container">
                <div className="about-title">
                    <span>About Me</span>
                </div>
                <div className="about-content">
                    <div className="about-left" />
                    <div className="about-right">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus ipsum a ligula
                            pulvinar, gravida convallis massa porta. Quisque libero sem, cursus et vestibulum ut, ornare
                            sit amet sem. Nunc accumsan nisi id ipsum imperdiet commodo. Nullam odio odio, laoreet et
                            vestibulum ac, tincidunt nec ipsum.
                        </p>
                    </div>
                </div>
                <div className="about-footer">
                    <div>Resume</div>
                    <div>LinkedIn</div>
                    <div>Contact</div>
                </div>
            </div>
        );
    }
}
