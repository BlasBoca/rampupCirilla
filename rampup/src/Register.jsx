import React, { useState } from 'react';

const Register = ({ handleCreate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registered, setRegistered] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.length < 8) {
      setPasswordError('Password must have more than 7 characters');
    } else {
      handleCreate({ username, password });
      setRegistered(true);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <div>{passwordError}</div>}
        </div>
        <button type="submit" disabled={password.length < 8}>
          Register
        </button>
      </form>
      {registered && <div>You are now registered</div>}
    </div>
  );
};
export { Register };
