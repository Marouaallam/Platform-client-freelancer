import Slider from "react-slick"
import {Link} from 'react-router-dom';


const ProfileCategories = () => {
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
  return (
    <div className="w-3/4 m-auto mb-16">
       <div>
        <Slider className="py-4" {...settings}>
            {data.map ((d,i) => (
                <div key={i} className=" p-5 h-80 w-auto text-black  flex flex-col justify-center items-center rounded-xl bg-indigo-200 shadow " style={{backgroundColor : '#C4CCF9'}}>
                    <div className="flex flex-col  justify-center items-start g-4 p-4">
                        <p>{d.description}</p>
                        <p className="text-gray-900 font-bold text-2xl">{d.name}</p>
                    </div>
                    <Link to={d.src} className="m-auto h-32 w-auto rounded-t-xl flex justify-center items-center" >
                        <img src={d.img} alt="" className="h-32 w-auto"/>
                    </Link>
                </div>
            ))}
        </Slider>
        </div>
    </div>
  )
}

const data = [
    {
        description: 'User interface and user experience',
        name:'UI/UX',
        img:'/UiUx.png',
        src:'/profile/uiproject'
    },
    {
        description: 'User interface and user experience',
        name:'Programming',
        img:'/Programming.png'
    },
    {
        description: 'User interface and user experience',
        name:'3D Design',
        img:'/3D Design.png'
    },
    {
        description: 'User interface and user experience',
        name:'Consulting',
        img:'/Consulting.png'
    },
    {
        description: 'User interface and user experience',
        name:'Digital Marketing',
        img:'/Degital Marketing.png'
    },
    {
        description: 'User interface and user experience',
        name:'Music And Audio',
        img:'/Music&audio.png'
    },
    {
        description: 'User interface and user experience',
        name:'Writing And Translation',
        img:'/Writing&translation.png'
    }
]

export default ProfileCategories