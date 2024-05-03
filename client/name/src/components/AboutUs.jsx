import { useState } from "react"

const AboutUs = () => {
    const [cards] = useState([
        {
            name:'What is Skillance',
            content:`
            Skillance is an Algerian freelancing platform that facilitates the connection between freelancers and clients. 
            It offers a marketplace where clients can find part-time or full-time freelancers across various categories. 
            Similarly, freelancers can browse job offers from both large and small companies, enabling them to find new projects and opportunities. 
            Skillance includes features such as messaging, allowing users to communicate directly with freelancers, 
            and provides information on a freelancer's job history and client ratings.
            Additionally, users can contact the website for assistance if needed. `
        },
        {
            name:'What do we offer our Clients',
            content:`Skillance offers clients a streamlined platform to find skilled freelancers across diverse categories. 
            Clients can communicate directly with freelancers to discuss project details and view their profiles,
            including ratings and reviews from previous clients. 
            This facilitates informed hiring decisions, 
            ensuring successful project completion in a convenient and efficient manner.`
        },
        {
            name:'What do we offer our Freelancers',
            content:`Skillance provides freelancers with diverse job opportunities in various categories, allowing flexible remote work. 
            Direct communication with clients and profile visibility enhance credibility, 
            while ratings and reviews boost reputation. 
            Skillance empowers freelancers to pursue their career goals independently in a supportive online marketplace.`
        }
    ])
  return (
    <div className=" py-2" id="aboutus">
    <section style={{backgroundColor: '#899AF3', paddingBottom: '20px', paddingTop:'30px'}}>
        {cards.slice(0, 1).map((card, index) => (
                        <div key={index} className="cardus flex-col px-4" style={{width:'1000px',marginLeft:'auto', marginRight:'auto',paddingTop:'50px'}}>
                            <div>
                                <img className="h-10 w-auto px-3" src='/skillance.png' />
                                <h1 className="custom-text" style={{color: '#000', fontWeight:'700', fontSize:'24px',textAlign:'left'}}>{card.name}</h1>
                            </div>
                            <p>{card.content}</p>
                        </div>
                    ))}
    <div className="cards-container" style={{ display: 'flex', justifyContent: 'center' }}>
        {cards.slice(1).map((card, index) => (
            <div key={index} className="cardus flex flex-col px-4" style={{ width: '480px', margin: '20px', paddingTop: '50px' }}>
                <h1 className="custom-text" style={{ color: '#000', fontWeight: '700', fontSize: '24px', textAlign: 'left' }}>{card.name}</h1>
                <p style={{ color: '#000' }}>{card.content}</p>
            </div>
        ))}
    </div>
    </section>
</div>
  )
}

export default AboutUs