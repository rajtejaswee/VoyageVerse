import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from "./feature/authSlice"

function App() {
  const [loading, setLoading] = new useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
      // .catch()
    }).finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
  <div className='min-h-screen'>test</div>
  ) : null //improve here
}

export default App
