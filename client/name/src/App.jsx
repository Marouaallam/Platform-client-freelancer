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
 import { Freelancer } from './pages/freelancer.jsx';
import { CatFree } from './pages/catFree.jsx';
import {Projectfree} from './pages/Projectfree.jsx';
import { Profile } from './pages/profile.jsx';
import { Dashboard } from './pages/admin/dashboard.jsx';
import { Popup } from './components/popup';
import { ProjectPopup } from './components/projectPopup';
import { User } from './pages/admin/user.jsx';
import { Project } from './pages/admin/project.jsx';
import { Report } from './pages/admin/report.jsx';
import { Chat } from './pages/Chat.jsx';
import { Reports } from './pages/report.jsx';




function App() {
  return(
    <div className="App">
        <Router>
          
         <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/auth" element={<Auth />}/>
           <Route path="/signup" element={<Signup />}/>

           <Route path="/11" element={<Freelancer />} />
           <Route path="/22" element={<CatFree />} />
           <Route path="/33" element={<Projectfree />} />
           <Route path="/profile" element={<Profile />}/>
           <Route path="/dashboard" element={<Dashboard />}/>
           <Route path="/dashboard/user" element={<User />}/>
           <Route path="/dashboard/project" element={<Project />}/>
           <Route path="/dashboard/report" element={<Report />}/>
           <Route path="/popup" element={<ProjectPopup  />}/>
<<<<<<< HEAD
           <Route path="/profile/chat" element={<Chat  />}/>
           <Route path="/profile/report" element={<Reports  />}/>
          
=======
>>>>>>> fa63f1d9cb21774c4c7338c9c67e861cb77f74da
         </Routes>
        </Router>
    </div>
)
}
export default App;