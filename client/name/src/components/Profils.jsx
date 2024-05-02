import Slider from "react-slick"

const Profils = () => {
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
        <h1 className="custom-text" style={{fontSize: '50px', fontWeight: 760}}>Take a look at our skilled</h1>
        <h1 className="custom-text" style={{fontSize: '50px', fontWeight: 760, color: '#158BFC'}}>Freelancers</h1>
        <div>
        <Slider className="py-4" {...settings}>
            {dataP.map ((d) => (
                <div className=" p-5 h-80 w-auto text-black  flex flex-col justify-center items-center rounded-xl bg-indigo-200 shadow " style={{backgroundColor : '#C4CCF9'}}>
                    <div className="m-auto h-24 w-auto rounded-t-xl flex justify-center items-center">
                        <img src={d.img} alt="" className="h-24 w-auto"/>
                        
                    </div>
                    <p className="text-gray-900 font-bold text-3xl " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{d.name}</p>
                    <div className="flex flex-row  justify-center items-start g-4 p-4 py-0" style={{fontSize:'14px'}}>
                        <div className="flex flex-row justify-center items-start">
                            <img src="/star.png" style={{height:'12px', width:'auto', marginRight:'6px', marginTop:'6px'}}/>
                            <p>{d.rating}</p>
                        </div>
                        <p style={{ marginRight: '16px', marginLeft: '16px'}}>{d.price}</p>
                        <p style={{ marginRight: '16px', marginLeft: '16px'}}>{d.job}</p>
                    </div>
                    <p style={{fontSize:'14px'}}>{d.description}</p>
                    <a href="" className="profilink" style={{fontSize:'14px'}}>Visit Profil</a>
                </div>
            ))}
        </Slider>
        </div>
    </div>
  )
}

const dataP = [
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '$17.00/h',
        job: '6 Jobs',
        jobName: 'programmer',
        description: 'I offer coding website and mobile app i have 3 years of the experience in this fields.'
    },
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '$17.00/h',
        job: '6 Jobs',
        jobName: 'UI/UX Designer',
        description: 'With 3 years of UI/UX design experience, I create intuitive digital experiences blending aesthetics with functionality, from wireframing to prototyping.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '$17.00/h',
        job: '6 Jobs',
        jobName: 'Digital marketer',
        description: 'With 3 years in digital marketing, I drive brand visibility and conversion growth through targeted strategies spanning SEO, content, social media, and analytics.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '$17.00/h',
        job: '6 Jobs',
        jobName: 'Tutor',
        description: 'As a tutor for 3 years, I empower students with personalized support across subjects, fostering academic excellence and confidence in learning.'
    },
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '$17.00/h',
        job: '6 Jobs',
        jobName: '3D Designer',
        description: 'With 3 years of 3D design expertise, I bring creative visions to life through stunning visualizations and immersive experiences for various industries.'
    },
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '$17.00/h',
        job: '6 Jobs',
        jobName: 'Musician',
        description: 'With 3 years of musical experience, I captivate audiences with my performances, blending passion and skill to create unforgettable musical moments.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '$17.00/h',
        job: '6 Jobs',
        jobName: 'Translator',
        description: 'Leveraging 3 years of translation expertise, I bridge language barriers with precision and cultural sensitivity, ensuring seamless communication across diverse audiences.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '$17.00/h',
        job: '6 Jobs',
        jobName: 'Writer',
        description: 'Leveraging 3 years of translation expertise, I bridge language barriers with precision and cultural sensitivity, ensuring seamless communication across diverse audiences.'
    },
]

export default Profils