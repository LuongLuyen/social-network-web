import Introduce from './Page/Introduce'
import Home from './Page/Home'
import Film from './Page/Film'
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Introduce/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/film' element={<Film/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
