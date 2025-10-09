import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [testMessage, setTestMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [connectionStatus, setConnectionStatus] = useState('checking')

  // Check backend connection on mount
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
      <h1>⚡ Vite + React + Spring Boot</h1>
      
      <div className="card">
        <div style={{ marginBottom: '20px' }}>
          <span>Backend Status: </span>
          <span style={{
            color: connectionStatus === 'connected' ? '#4ade80' : 
                   connectionStatus === 'checking' ? '#fbbf24' : '#f87171',
            fontWeight: 'bold'
          }}>
            {connectionStatus === 'connected' ? '✅ Connected' : 
             connectionStatus === 'checking' ? '⏳ Checking...' : '❌ Disconnected'}
          </span>
        </div>
        
        <button onClick={fetchTest} disabled={loading} style={{ marginLeft: '10px' }}>
          Fetch /api/test
        </button>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: '#f87171' }}>{error}</p>}
                
        {testMessage && (
          <div className="response">
            <h3>/api/test response:</h3>
            <p>{testMessage}</p>
          </div>
        )}
      </div>
      
      <p className="read-the-docs">
        Frontend (Vite): http://localhost:3000 | Backend (Spring Boot): http://localhost:8080
      </p>
    </div>
  )
}

export default App
