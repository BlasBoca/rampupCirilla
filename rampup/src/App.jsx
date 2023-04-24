import React, { useState } from 'react';
import { Login } from './Login';
import { Register } from './Register';

function App() {
  const [validCredentials, setValidCredentials] = useState([
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    age: '',
    ID: '',
  });
  const [savedData, setSavedData] = useState([]);
  const [deleteID, setDeleteID] = useState('');
  

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
    setSavedData([...savedData, { ...formData, show: true }]);
    setFormData({ name: '', lastName: '', age: '', ID: '' });
  };

  const handleDelete = (event) => {
    event.preventDefault();
    if (deleteID) {
      setSavedData(savedData.filter((item) => item.ID !== deleteID));
      setDeleteID('');
    }
  };

  const handleSearch = () => { 
    const searchID = document.getElementById('searchID').value; //MODIFICAR PARA NO USAR EL getElementById (probar usar el formData)
    if (searchID) {
      const matchedData = savedData.filter((data) => data.ID === searchID);
      setSavedData(matchedData);
    }
  };
  //Cumple la funcion de buscar pero cuando borro lo ingresado no me regresa los demas datos

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
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
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
                required
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
                required
              />
            </div>
            <div>
              <label htmlFor="ID">ID:</label>
              <input
                type="text"
                id="ID"
                name="ID"
                value={formData.ID}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Send</button>
          </form>
          <div>
            {savedData
              .filter((data) => data.ID !== deleteID)
              .map((data) => (
                <ul key={data.id}>
                  <li>Name: {data.name} </li>
                  <li>Last Name: {data.lastName} </li>
                  <li>Age: {data.age}</li>
                  <li>ID: {data.ID}</li>
                </ul>
              ))}
          </div>

          <div>
            <h1>Delete person by ID</h1>
            <label>ID:</label>
            <input
              type="text"
              name="deleteID"
              value={deleteID}
              onChange={(e) => setDeleteID(e.target.value)}
            ></input>
            <button type="button" onClick={handleDelete}>
              Delete
            </button>
          </div>

          <div>
            <h1>Search person by ID</h1>
            <label>ID:</label>
            <input type="text" id="searchID" name="searchID"></input>
            <button type="button" onClick={handleSearch}>Search</button>
          </div>
          <button onClick={() => setIsLoggedIn(false)}>Log out</button>
        </div>
      )}
    </div>
  );
}

export { App };
