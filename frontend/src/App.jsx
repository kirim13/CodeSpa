import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/Header.jsx';
import './components/Header.css';

function App() {
  const [testMessage, setTestMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [connectionStatus, setConnectionStatus] = useState('checking')
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    fetchTest()
  }, [])


  const fetchTest = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await axios.get('http://localhost:8080/api/test')
      setTestMessage(response.data)
      setConnectionStatus('connected')
    } catch (err) {
      setError('Failed to fetch /api/test')
      setConnectionStatus('disconnected')
    }
    setLoading(false)
  }

  return (

    <div className="App">
      <Header />
      <div className='main'>
        <div className="box-button">
          <div className='TextBox'>
            <textarea
              className="input-box"
              placeholder="Paste unfactored code here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows="11"
            />
          </div>
          <button className='refactor-button'>Refactor</button>
          <div className='file-upload'>
            <label htmlFor="file-upload">Upload File: </label>
        <input 
            type="file" 
            id="file-upload" 
            className="file-input"
        />
          </div>
        </div>
        <div className='sidebar'>
          <div className='left-description'>
            <h2>How to Use</h2>
            <p>Copy and paste your code directly into the text-box. Or, upload a file from your computer.
              Then simply press 'Refactor'!
            </p>
          </div>
        </div>
        
      </div>
      <p className="read-the-docs">
          Frontend (Vite): http://localhost:3000 | Backend (Spring Boot): http://localhost:8080
      </p>
      
    </div> 
  )
  
}

export default App
