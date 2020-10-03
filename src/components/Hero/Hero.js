import React from 'react';
import '../../App.css';
import {Button} from '../Button/Button';
import './Hero.css';

function Hero() {
    return (
        <div className='hero-container'>
            <video src="/videos/futuristic.mp4" autoPlay loop muted />
            <h1>Kate's Portfolio</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button>
            </div>
        </div>
    )
}

export default Hero
