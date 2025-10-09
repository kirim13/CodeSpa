import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from Spring Boot backend
    axios.get('http://localhost:8080/api/test')
      .then(response => {
        setMessage(response.data.message);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to connect to backend. Make sure Spring Boot is running on port 8080');
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React + Spring Boot Full Stack App</h1>
        
        {loading && <p>Loading...</p>}
        
        {error && (
          <div style={{ color: '#ff6b6b' }}>
            <p>{error}</p>
          </div>
        )}
        
        {!loading && !error && (
          <div>
            <p>✅ Successfully connected to backend!</p>
            <p>Message from Spring Boot: <strong>{message}</strong></p>
          </div>
        )}
        
        <div style={{ marginTop: '30px', fontSize: '14px' }}>
          <p>Frontend running on: http://localhost:3000</p>
          <p>Backend running on: http://localhost:8080</p>
        </div>
      </header>
    </div>
  );
}

export default App;