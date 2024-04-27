import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import './App.css';
import {Home} from './pages/home.jsx';
import {Auth} from './pages/auth.jsx';
import {Navbar} from './components/navbar.jsx'

function App() {
  return(
    <div className="App">
        <Router>
          <Navbar />
         <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/auth" element={<Auth />}/>
         </Routes>
        </Router>
    </div>
)
}
export default App;