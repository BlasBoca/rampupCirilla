import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password.length < 8) {
      setPasswordError('Password must have more than 7 characters');
      return;
    }
    handleLogin(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="Login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {passwordError && <div className="error">{passwordError}</div>}
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export { Login };
