import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const ProfilIcon = () => {
  const [isBarOpen, setIsBarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleBar = () => {
    setIsBarOpen(!isBarOpen);
  };

  const handleOptionClick = (option, path) => {
    console.log(option);  // Perform any action based on the option if needed
    navigate(path);
  };

  return (
    <div className="app">
      <div className="icon" onClick={toggleBar}>
        <img src="/profilG.png" alt="Icon" style={{ borderRadius: '50%', width: '45px', height: 'auto', margin: '10px', cursor: 'pointer' }} />
      </div>
      {isBarOpen && (
        <div className="bar">
          <ul className="options-list">
            <li onClick={() => handleOptionClick("Profil", '/profile')}>Profil</li>
            <li onClick={() => handleOptionClick("Chat", '/profile/chat')}>Chat</li>
            <li onClick={() => handleOptionClick("Projects", '/')}>Projects</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfilIcon;
