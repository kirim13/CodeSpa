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
  const [outputText, setOutputText] = useState('');

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
          <div className='file-upload'>
            <label htmlFor="file-upload">Upload File: </label>
        <input 
            type="file" 
            id="file-upload" 
            className="file-input"
        />
          </div>
          <button className='refactor-button'>Refactor</button>
          <div className='TextBox'>
          <textarea
            className="input-box"
            placeholder="Refactored code will appear here..."
            value={outputText}
            readOnly
            rows="11"
          />
          </div>
        
        </div>
        <div className='sidebar'>
          <div className='left-description'>
            <h2>How to Use:</h2>
            <p>
              Simply paste your code into the text box provided.
            </p>
            <p>
              If you have larger files or multiple code blocks, you can also upload a file from your device.
            </p>
            <p>
              Click the 'Refactor' button to process your code. The refactored code will appear in the adjacent text box.
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
