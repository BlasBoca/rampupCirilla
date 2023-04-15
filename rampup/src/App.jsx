import React, { useState } from 'react';
import { Login } from './Login';
import { Register } from './Register';

function App() {
  const [validCredentials, setValidCredentials] = useState([
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({ name: '', lastName: '', age: '', id: '' });
  const [savedData, setSavedData] = useState([]);

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSavedData([...savedData, formData]);
    setFormData({ name: '', lastName: '', age: '', id: '' });
  };

  const handleDelete = (idToDelete) => {
    const newData = savedData.filter((data) => data.id !== idToDelete);
    setSavedData(newData);
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
        <div>
        <h1>Welcome, you are now logged in</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input 
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              />
          </div>
          <div>
          <label htmlFor="lastName">Last name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="id">ID:</label>
              <input
                type="text"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Send</button>
          </form>
          <div>
          {savedData.map((data) => (
              <div key={data.id}>
                <span>Name: {data.name} </span>
                <span>Last Name: {data.lastName} </span>
                <span>Age: {data.age}</span>
                </div>
            ))}
          </div>
          <button onClick={() => setIsLoggedIn(false)}>Log out</button>
        </div>
      )}
    </div>
  );
}

export { App };