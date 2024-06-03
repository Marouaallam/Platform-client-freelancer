import Slider from "react-slick"
import { useState,useEffect } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import userpic from "../assets/Userpic.png";



const Profils = () => {
    const navigate = useNavigate();
    const [cards,setCards] = useState([]);
    const [userData, setUserData] = useState([]);

    useEffect(()=>{
        const fetchcards= async()=>{
        try{
        const response= await axios.get("http://localhost:3001/profile");
        setCards(response.data)
        

        }catch(err){
            console.error(err)
        }
    }
    fetchcards()
    },[])
        
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <button className="slick-prev" />,
        nextArrow: <button className="slick-next" />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
    }
    
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await axios.get("http://localhost:3001/auth/signup");
                setUserData(res.data);
            } catch (error) {
                console.log(error);
              
            }
        };
        fetchUserData();
    }, []);

  return (
    <div className="w-3/4 m-auto mb-16">
        <h1 className="custom-text" style={{fontSize: '50px', fontWeight: 760}}>Take a look at our skilled</h1>
        <h1 className="custom-text" style={{fontSize: '50px', fontWeight: 760, color: '#158BFC'}}>Freelancers</h1>
        <div>
        <Slider className="py-4" {...settings}>
        {cards.map((d, i) => (
          
          <div key={i} className="p-5 h-80 w-auto text-black flex flex-col justify-center items-center rounded-xl bg-indigo-200 shadow" style={{ backgroundColor: '#C4CCF9' }}>
            <div className="m-auto h-24 w-auto rounded-t-xl flex justify-center items-center">
              <img src={userpic} alt="" className="h-24 w-auto rounded-full" />
            </div>
            {userData.map((user, j) => (
              d.userID === user._id  && user.role === 'freelancer'? (
                <p key={j} className="text-gray-900 font-bold text-lg" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {user.username}
                </p>
              ) : null
            ))}
            <div className="flex flex-row justify-center items-start g-4 p-4 py-0" style={{ fontSize: '14px' }}>
              <div className="flex flex-row justify-center items-start">
                <img src="/star.png" style={{ height: '12px', width: 'auto', marginRight: '6px', marginTop: '6px' }} />
                <p>3.0</p>
              </div>
              <p style={{ marginRight: '16px', marginLeft: '16px' }}>{d.price} </p>
              <p style={{ marginRight: '16px', marginLeft: '16px' }}>{d.jobs} jobs</p>
            </div>
            <p style={{ fontSize: '14px' }}>{d.description}</p>
            <div>
              <button className="ml-28 mt-8 hover:underline text-sm" onClick={() => navigate(`/profilefree/${d._id}`)}>Visit this profile</button>
            </div>
          </div>
        ))}
        </Slider>
        </div>
    </div>
  )
}


export default Profils