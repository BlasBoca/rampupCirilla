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

  const [showRegistration, setShowRegistration] = useState(false);

  const handleCreateAccount = () => {
    setShowRegistration(true);
  };

  return (
    <div className="App">
      {!showRegistration && !isLoggedIn && (
        <div>
          <Login handleLogin={handleLogin} />
          <button onClick={handleCreateAccount}>Create a new account</button>
        </div>
      )}

      {showRegistration && !isLoggedIn && (
        <div>
          <Register handleCreate={handleRegister} />
          <button onClick={() => setShowRegistration(false)}>Back</button>
        </div>
      )}

      {isLoggedIn && (
        <h1>Welcome, you are now logged in</h1>
      )}
    </div>
  );
}

export { App };