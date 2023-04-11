import { useState } from 'react';

/**
 * This is the login component
 * @returns {JSX}
 */
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const cambioUsername = (event) => {
    setUsername(event.target.value);
  };

  const cambioPassword = (event) => {
    
    const newPassword=event.target.value;
    setPassword(newPassword);
    //ahora digo q sea mayor a 7 caracteres

    if(newPassword.length<=7){
      setPasswordError('Password must be more than 7 letters');
    }else{
      setPasswordError('');
    }
    
  };

  const Submit = (event) => {
    event.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      // .trim borra espacios vacios
      return;
    }
  };

  return (
    <form onSubmit={Submit}>
      <label>
        Username: <input type="text" value={username} onChange={cambioUsername}></input>
      </label>
      <label>
        Password: <input type="password" value={password} onChange={cambioPassword}></input>
      </label>
      {passwordError}
      <button type="submit">Send</button>
      <button type="createNewAccount">Create new account</button>
    </form>
  );
};

export { Login };
