import React, { useState } from 'react';
import { Login } from './Login';
import { Register } from './Register';

function App() {
  const [validCredentials, setValidCredentials] = useState([
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (formData) => {
    const matchingCredentials = validCredentials.filter(
      (credentials) =>
        credentials.username === formData.username &&
        credentials.password === formData.password
    );
    if (matchingCredentials.length > 0) {
      console.log('Credentials are valid');
      setIsLoggedIn(true);
    } else {
      console.log('Invalid username or password');
    }
  };

  const handleRegister = (formData) => {
    setValidCredentials([...validCredentials, formData]);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <h1>Welcome, you are now logged in</h1>
      ) : (
        <>
          <Login handleLogin={handleLogin} />
          <Register handleCreate={handleRegister} />
        </>
      )}
    </div>
  );
}

export { App };
