
import { useState, useEffect } from 'react';
import axios from 'axios';

export const ProjetCat = ({ id }) => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
        
      try {
        const response = await axios.get(`http://localhost:3001/project/${id}`);
        console.log(response)
        const data = Array.isArray(response.data) ? response.data : [response.data];
        setProject(data);
        

      } catch (err) {
        console.error(err);
      }
    };
    fetchProject();
  }, [id]);
  console.log(project)
  return (
    <div className="custom-text-bold p-6" style={{ backgroundColor: '#C4CCF9' }}>
      <h1>Explore Available Projects</h1>
      <div className="project mx-auto">
      <div className=" cards grid gap-x-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{margin: '30px'}}>
      {
                        project.map((Projects,i) => (
                            <div key={i} className="card w-full ">
                                <div className="flex items-start">
                                    <img
                                        src={Projects.image}
                                        alt="Image"
                                        className="w-8 h-8 rounded mr-2"
                                    />
                                    <h4>{Projects.postedBy}</h4>
                                </div>
                                <h1 className='text-xl'>{Projects.nomProjet}</h1>
                                <p className='text-lg'>{Projects.description}</p>
        
                                
                            </div>
                        ))
                    }
        </div>
      </div>
    </div>
  );
}
