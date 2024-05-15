import { useState, useEffect } from "react";
import axios from "axios";
import { Popup } from "@/components/popup";
import { PopupUpdate } from "../components/popupUpdate";


export const AdminDashboard = () => {
  const handleRemove = (projectId) => {
    axios.delete(`http://localhost:3001/project/${projectId}`)
      .then(() => {
        setCards(cards.filter(project => project._id !== projectId));
      })
      .catch(err => console.error(err));
  };

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:3001/project");
        setCards(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCards();
  }, []);


  return (
    <div className="admin-container">
      <div className="pl-40 pt-40 pb-24 font-bold text-3xl">
        Admin Dashboard
      </div>
      <div className="ml-40 space-y-2">
        <div className="font-bold text-xl">Projects 
        <Popup />
            
        </div>
        {cards.map(project => (
            <div>
                 <button onClick={() => handleRemove(project._id)}>DELETE</button>
                 <PopupUpdate 
                  image={project.image}
                  postedBy={project.postedBy}
                  nomProjet={project.nomProjet}
                  description={project.description}
                  dateDebut={project.dateDebut}
                  DDL={project.DDL}
                  skillsRequired={project.skillsRequired}
                  budget={project.budget}
                 />
                 
          <div key={project._id} className="flex p-2 w-[900px] items-center bg-white rounded border hover:border-[#647DFF] cursor-pointer">
           <div>
              <img
                src={project.image}
                alt="Image"
                className="w-6 h-6 rounded mr-24"
              />
              <h4 className="text-[8px]">{project.postedBy}</h4>
            </div>
            <h3 className="text-[8px] w-24">{project.nomProjet}</h3>
            <p className="text-[8px]">{project.description}</p>
          </div>
          </div>
        ))}
      </div>
      <div>
        <div className="pl-40 pt-24 font-bold text-xl">
          Profiles
        </div>
      </div>
    </div>
  );
};
