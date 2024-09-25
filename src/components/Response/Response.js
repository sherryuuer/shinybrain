// src/components/ResponseDisplay/ResponseDisplay.js
import React from 'react';

// Define the ResponseDisplay component
const Response = ({ response }) => {
    // Conditionally render the response if it exists
    if (!response) return null;

    return (
        <div>
            <p className='f3'>
                {'Gemini Says :P'}
            </p>
            <div className="center pa4 br3 shadow-2">
                <p>{response}</p>
            </div>
        </div>
    );
};

export default Response;
