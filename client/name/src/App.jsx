import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import './App.css';
import {Home} from './pages/home.jsx';
import {Auth} from './pages/auth.jsx';
import { Signup } from './pages/signup.jsx';
function App() {
  return(
    <div className="App">
        <Router>
          
         <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/auth" element={<Auth />}/>
           <Route path="/signup" element={<Signup />}/>

         </Routes>
        </Router>
    </div>
)
}
export default App;