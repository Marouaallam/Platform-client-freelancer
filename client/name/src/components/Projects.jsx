import { useState,useEffect } from "react"
import axios from "axios";
import { ProjectPopup } from "./projectPopup";

const Projects = () => {
    const [cards,setCards] = useState([]);
    useEffect(()=>{
        const fetchcards= async()=>{
        try{
        const response= await axios.get("http://localhost:3001/project");
        setCards(response.data)
        console.log(response.data)
        
        }catch(err){
            console.error(err)
        }
    }
    fetchcards()
    },[])
    console.log(cards)
        
  return (
    <div className=" py-10">
        <section style={{backgroundColor: '#C4CCF9', paddingBottom: '20px'}}>
            <div className="project mx-auto">
                <h1 className="custom-text" style={{fontSize: '50px', fontWeight: 760, paddingTop:'30px'}}>Explore Available Projects</h1>
                <div className=" cards grid gap-x-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{margin: '30px'}}>
                    {
                        cards.map((Projects,i) => (
                            <div key={i} className="card w-full ">
                                <div className="flex items-start">
                                    <img
                                        src={Projects.image}
                                        alt="Image"
                                        className="w-8 h-8 rounded mr-2"
                                    />
                                    <h4>{Projects.postedBy}</h4>
                                </div>
                                <h3>{Projects.nomProjet}</h3>
                                <p>{Projects.description}</p>
        
                                 <ProjectPopup
                                 receiverId={Projects.userID}
                                 projectId={Projects && Projects._id}
                                 image={Projects.image}
                                 postedBy={Projects.postedBy}
                                 nomProjet={Projects.nomProjet}
                                 description={Projects.description}
                                 dateDebut={Projects.dateDebut}
                                 DDL={Projects.DDL}
                                 skillsRequired={Projects.skillsRequired}
                                 budget={Projects.budget}

                                 
                               />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    </div>
  )
}

export default Projects