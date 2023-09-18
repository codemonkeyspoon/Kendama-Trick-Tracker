// import React, { useState, useEffect } from 'react';
import './App.css';
import TrickList from './components/TrickList';
// import SignIn from './components/SignIn';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [username, setUsername] = useState('');

  // useEffect(() => {
  //   // Check local storage for authentication status when the app loads
  //   const storedAuthStatus = localStorage.getItem('isAuthenticated');
  //   if (storedAuthStatus === 'true') {
  //     setIsAuthenticated(true);
  //     const storedUsername = localStorage.getItem('username');
  //     if (storedUsername) {
  //       setUsername(storedUsername);
  //     }
  //   }
  // }, []);

  // // Function to handle sign-in and set username and authentication status
  // const handleSignIn = (newUsername) => {
  //   localStorage.setItem('isAuthenticated', 'true');
  //   localStorage.setItem('username', newUsername);
  //   setIsAuthenticated(true);
  //   setUsername(newUsername);
  // };

  // // Function to handle sign-out and update local storage
  // const handleSignOut = () => {
  //   localStorage.setItem('isAuthenticated', 'false');
  //   localStorage.removeItem('username');
  //   setIsAuthenticated(false);
  //   setUsername('');
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kendama Progress Tracker App</h1>
        <h2>Welcome! These tricks go from easiest to hardest. Once you are able to lace a trick, mark it on the list.</h2>
      </header>
      <main>
        {/* {isAuthenticated ? (
          <>
            <p>Welcome, {username}! Here is your progress:</p>
            <button onClick={handleSignOut}>Sign Out</button>
            <TrickList username={username} />
          </>
        ) : (
          <SignIn onSignIn={handleSignIn} />
        )} */}
        <TrickList />
      </main>
    </div>
  );
}

export default App;
