import { useState } from 'react';


const ProfilIcon = () => {

    const [isBarOpen, setIsBarOpen] = useState(false);
  
  const toggleBar = () => {
    setIsBarOpen(!isBarOpen);
  };

  return (
      <div className="app">
        <div className="icon" onClick={toggleBar}>
          <img src="/profilG.png" alt="Icon" style={{borderRadius:'50%', width:'50px', height:'auto',margin:'10px', cursor:'pointer'}}/>
        </div>
        {isBarOpen && (
        <div className="bar">
          <ul className="options-list">
            <li onClick={() => handleOptionClick("Option 1")} >Profil</li>
            <li onClick={() => handleOptionClick("Option 2")} >Chat</li>
            <li onClick={() => handleOptionClick("Option 3")} >Projects</li>
          </ul>
        </div>
      )}
      </div>
    );
}

export default ProfilIcon