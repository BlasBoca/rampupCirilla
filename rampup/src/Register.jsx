import { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [registered, setRegistered] = useState(false);
  const [conditionsMet, setConditionsMet] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setConditionsMet(event.target.value.trim()!='' && event.target.value.trim().length>7);

  };

  const handleCreate = (event) => {
    event.preventDefault();

    if (username.trim() === '' || password.trim() === '') {
      // .trim removes empty spaces
      return;
    }

    if (password.length <= 7) {
      setPasswordError('Password must have more than 7 characters');
      return;
    }

    setRegistered(true);
    
  };

  return (registered ? (
    <div>You are now registered</div>
  ) : (
    <form onCreate={handleCreate}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <div>{passwordError}</div>
      <button type="submit" disabled={!conditionsMet}>Create</button>
    </form>
    )
  )
};
export { Register };
