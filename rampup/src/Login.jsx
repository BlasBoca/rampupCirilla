
import { useState } from 'react';
import  {Register}  from './Register';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); 
  const [isRegistering, setIsRegistering] = useState(false);

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      // .trim removes empty spaces
      return;
    }

    // now check if password is at least 7 characters long
    if (password.length < 7) { // changed <= to < because it's asking for "more than"
      setPasswordError('Password must be at least 7 characters long'); // changed error message to match condition
      return;
    }

    // fixed syntax error in setLoggedIn
    if (username === 'blas' && password === 'aguanteboca') {
      setLoggedIn(true);
    } else {
      setPasswordError('Invalid username or password');
    }
  };

  const handleToggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    loggedIn ? (
      <div>Credentials are valid</div>
    ) : isRegistering ? (
        <Register passwordError={passwordError} setPasswordError={setPasswordError}/>
      ) : ( 
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input 
            type="text" 
            value={username} 
            onChange={handleChangeUsername}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
        </label>
        <div>{passwordError}</div> 
        <button type="submit">Send</button>
        <button type="button" onClick={handleToggleForm}>Create new account</button> {/* changed type to "button" because it's not a submit button */}
      </form>
    )
  );
};

export {Login}; // added default keyword to export