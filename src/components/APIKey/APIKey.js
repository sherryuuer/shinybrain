import React from "react";

const APIKey = ({ onApiKeyChange, apiKey }) => {
    return (
        <div
            className="form center pa4 br3 shadow-2"
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
            <input
                className="f4 pa2 w-70"
                type="password"
                placeholder="Enter your Gemini API key"
                value={apiKey}
                onChange={onApiKeyChange}
            />
        </div>
    );
};

export default APIKey;
