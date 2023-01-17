import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [realms, setRealms] = useState([]);

  useEffect(() => {
    axios.get('https://stark-thicket-21421.herokuapp.com/api/realms/all')
      .then(results => {
        setRealms(results.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  return (
    <div className="App">
      <header className="App-header">

        {realms.map((r, index) => (
          <div key={index}>{r.name}</div>
        ))}

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
