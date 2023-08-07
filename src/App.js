import Introduce from './Page/Introduce'
import Home from './Page/Home'
import Film from './Page/Film'
import Chat from './Page/Chat'
import { useState,useEffect } from "react"
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import './App.css'

function App() {
  const [localData, setLocalData] = useState(null)
  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem('localData'))
    if (data) {
     setLocalData(data)
    }
  }, [])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Introduce/>}/>
          <Route path='/home' element={localData !== null ? <Home/> : <Introduce/>}/>
          <Route path='/film' element={<Film/>}/>
          <Route path='/chat' element={<Chat/>}/>
        </Routes>
    </Router>
    </div>
  )
}

export default App
