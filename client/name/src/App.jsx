import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import {Home} from './pages/home.jsx';
import {Auth} from './pages/auth.jsx';
import { Signup } from './pages/signup.jsx';
import BannerImage from './components/BannerImage.jsx';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Profile } from './pages/profile.jsx';
import { AdminDashboard } from './pages/admin.jsx';

function App() {
  return(
    <div className="App">
        <Router>
          
         <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/auth" element={<Auth />}/>
           <Route path="/signup" element={<Signup />}/>
           <Route path="/profile" element={<Profile />}/>
           <Route path="/dashboard" element={<AdminDashboard />}/>
         </Routes>
        </Router>
    </div>
)
}
export default App;