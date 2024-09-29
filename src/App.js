import './App.css';
import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg'
import APIKey from './components/APIKey/APIKey';
import Response from './components/Response/Response';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
const { GoogleGenerativeAI } = require("@google/generative-ai");


function App() {
  const [inputfield, setInputfield] = useState(""); // State for the prompt
  const [apiKey, setApiKey] = useState(""); // State for the API key
  const [response, setResponse] = useState(""); // State to store the API response
  const [route, setRoute] = useState("signin"); // Define state for route
  const [isSignedIn, setIsSignedIn] = useState(false);

  const onInputChange = (event) => {
    setInputfield(event.target.value);
  }

  // Handler for input changes for the API key
  const onApiKeyChange = (event) => {
    setApiKey(event.target.value);
  };

  // Function to handle the API call
  const onButtonSubmit = async () => {
    if (!apiKey) {
      alert("Please enter your API key.");
      return;
    }

    try {
      const genAI = new GoogleGenerativeAI(apiKey); // Use the user's API key
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // Call the API with the prompt from the input field
      const result = await model.generateContent(inputfield);
      setResponse(result.response.text()); // Set the response text to state
      console.log(result.response.text());
    } catch (error) {
      console.error("Error generating content:", error);
      alert("There was an error generating content. Please check your API key.");
    }
  };

  const onRouteChange = (route) => {
    if (route === 'signout') {
      setIsSignedIn(false);
    } else if (route === 'home') {
      setIsSignedIn(true);
    }
    setRoute(route);
  }

  return (
    <div className="App">
      <ParticlesBg color="#F0FFFF" type="cobweb" bg={true} />
      <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
      {route === 'home' ? (
        <div>
          <Logo />
          <APIKey onApiKeyChange={onApiKeyChange} apiKey={apiKey} />
          {/* <Rank /> */}
          <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
          <Response response={response} />
        </div>
      ) : (
        route === 'signin' ? (
          <Signin onRouteChange={onRouteChange} />
        )
          : <Register onRouteChange={onRouteChange} />
      )
      }
    </div>
  );
}

export default App;
