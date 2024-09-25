import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';

const Logo = () => {
    return (
        <div className='center ma4 mt0' style={{ alignItems: 'center', width: '400px', height: '200px' }}>
            <Tilt className='Tilt br2 shadow-2'>
                <div className="center pa3 br3 shadow-5">
                    <br />
                    <h1>⚡️ Shiny Brain 🧠</h1>
                    <br />
                </div>
            </Tilt>
        </div >
    );
}

export default Logo;
