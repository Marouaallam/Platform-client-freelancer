import { useState } from "react"

const Projects = () => {
    const [cards] = useState([
        {
            name:'MicroSoft',
            title: 'card-1',
            text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Nostrum aliquam numquam nisi doloremque perspiciatis. 
            Sapiente, accusamus natus. Pariatur, facilis iste.`
        },
        {
            name:'MicroSoft',
            title: 'card-2',
            text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Nostrum aliquam numquam nisi doloremque perspiciatis. 
            Sapiente, accusamus natus. Pariatur, facilis iste.`
        },
        {
            name:'MicroSoft',
            title: 'card-3',
            text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Nostrum aliquam numquam nisi doloremque perspiciatis. 
            Sapiente, accusamus natus. Pariatur, facilis iste.`
        },
        {
            name:'MicroSoft',
            title: 'card-4',
            text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Nostrum aliquam numquam nisi doloremque perspiciatis. 
            Sapiente, accusamus natus. Pariatur, facilis iste.`
        },
        {
            name:'MicroSoft',
            title: 'card-5',
            text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Nostrum aliquam numquam nisi doloremque perspiciatis. 
            Sapiente, accusamus natus. Pariatur, facilis iste.`
        },
        {
            name:'MicroSoft',
            title: 'card-6',
            text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Nostrum aliquam numquam nisi doloremque perspiciatis. 
            Sapiente, accusamus natus. Pariatur, facilis iste.`
        },
    ])
  return (
    <div className=" py-10">
        <section style={{backgroundColor: '#C4CCF9', paddingBottom: '20px'}}>
            <div className="project mx-auto">
                <h1 className="custom-text" style={{fontSize: '50px', fontWeight: 760, paddingTop:'30px'}}>Explore Available Projects</h1>
                <div className="cards grid gap-x-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{margin: '30px'}}>
                    {
                        cards.map((card,i) => (
                            <div className="card w-full ">
                                <div className="flex items-start">
                                    <img
                                        src="/Microsoft.png"
                                        alt="Image"
                                        className="w-8 h-8 rounded mr-2"
                                    />
                                    <h4>{card.name}</h4>
                                </div>
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
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