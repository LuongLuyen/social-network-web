import Introduce from './Page/Introduce'
import Home from './Page/Home'
import Film from './Page/Film'
import Chat from './Page/Chat'
import Admin from './Page/Admin'
import Test from './Page/Test'
import { useState,useEffect } from "react"
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import './App.css'

function App() {
  const [localData, setLocalData] = useState(null)
  const [role, setRole] = useState('')
  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem('localData'))
    const role = JSON.parse(sessionStorage.getItem('role'))
    if (data) {
     setLocalData(data)
     setRole(role)
    }
  }, [])
  const chectUserRole = (localData,role)=>{
    if(localData !== null && role !== null){
      return(<Home/>)
    }else if(localData !== null && role === "ADMIN"){
      return(<Admin/>)
    }else {
      return(<Introduce/>)
    }
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Introduce/>}/>
          <Route path='/test' element={<Test/>}/>
          <Route path='/home' element={localData && role ? <Home/> : <Introduce/>}/>
          <Route path='/film' element={localData && role ? <Film/> : <Introduce/>}/>
          <Route path='/admin' element={chectUserRole(localData,role)}/>
          <Route path='/chat' element={localData && role ? <Chat/> : <Introduce/>}/>
        </Routes>
    </Router>
    </div>
  )
}

export default App
