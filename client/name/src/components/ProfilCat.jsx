const ProfilCat = () => {
    return (
        <div>
            <div className="custom-text-bold flex flexrow justify-center gap-2 m-6">
                <h1>Discover the categorie </h1>
                <h1 style={{color:'#158BFC'}}> UI UX</h1>
            </div>
            <div className="w-3/4 m-auto mb-16">
            <div className="grid grid-cols-4 gap-4">
              {dataP.map((d) => (
             <div key={d.jobName} className="cardPro p-4 h-auto w-auto text-black rounded-xl bg-indigo-200 shadow">
                  <div className="m-auto h-24 w-auto rounded-t-xl flex justify-center items-center">
                  <img src={d.img} alt="" className="h-24 w-auto" />
             </div>
                 <p className="text-gray-900 font-bold text-3xl text-center">{d.name}</p>
             <div className="flex justify-center items-center gap-2">
                   <img src="/star.png" style={{ height: '12px', width: 'auto' }} />
                 <p>{d.rating}</p>
                 <p>{d.price}</p>
                 <p>{d.job}</p>
             </div>
                 <p className="text-center" style={{ fontSize: '14px', padding: '0px'}}>{d.description}</p>
             </div>
             ))}
            </div>
            </div>
        </div>
    );
  };

const dataP = [
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'programmer',
        description: 'I offer coding website and mobile app i have 3 years of the experience in this fields.'
    },
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'UI/UX Designer',
        description: 'With 3 years of UI/UX design experience, I create intuitive digital experiences blending aesthetics with functionality, from wireframing to prototyping.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Digital marketer',
        description: 'With 3 years in digital marketing, I drive brand visibility and conversion growth through targeted strategies spanning SEO, content, social media, and analytics.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Tutor',
        description: 'As a tutor for 3 years, I empower students with personalized support across subjects, fostering academic excellence and confidence in learning.'
    },
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: '3D Designer',
        description: 'With 3 years of 3D design expertise, I bring creative visions to life through stunning visualizations and immersive experiences for various industries.'
    },
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Musician',
        description: 'With 3 years of musical experience, I captivate audiences with my performances, blending passion and skill to create unforgettable musical moments.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Translator',
        description: 'Leveraging 3 years of translation expertise, I bridge language barriers with precision and cultural sensitivity, ensuring seamless communication across diverse audiences.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Writer',
        description: 'Leveraging 3 years of translation expertise, I bridge language barriers with precision and cultural sensitivity, ensuring seamless communication across diverse audiences.'
    },
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'programmer',
        description: 'I offer coding website and mobile app i have 3 years of the experience in this fields.'
    },
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'UI/UX Designer',
        description: 'With 3 years of UI/UX design experience, I create intuitive digital experiences blending aesthetics with functionality, from wireframing to prototyping.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Digital marketer',
        description: 'With 3 years in digital marketing, I drive brand visibility and conversion growth through targeted strategies spanning SEO, content, social media, and analytics.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Tutor',
        description: 'As a tutor for 3 years, I empower students with personalized support across subjects, fostering academic excellence and confidence in learning.'
    },
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: '3D Designer',
        description: 'With 3 years of 3D design expertise, I bring creative visions to life through stunning visualizations and immersive experiences for various industries.'
    },
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Musician',
        description: 'With 3 years of musical experience, I captivate audiences with my performances, blending passion and skill to create unforgettable musical moments.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Translator',
        description: 'Leveraging 3 years of translation expertise, I bridge language barriers with precision and cultural sensitivity, ensuring seamless communication across diverse audiences.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Writer',
        description: 'Leveraging 3 years of translation expertise, I bridge language barriers with precision and cultural sensitivity, ensuring seamless communication across diverse audiences.'
    },
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'programmer',
        description: 'I offer coding website and mobile app i have 3 years of the experience in this fields.'
    },
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'UI/UX Designer',
        description: 'With 3 years of UI/UX design experience, I create intuitive digital experiences blending aesthetics with functionality, from wireframing to prototyping.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Digital marketer',
        description: 'With 3 years in digital marketing, I drive brand visibility and conversion growth through targeted strategies spanning SEO, content, social media, and analytics.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Tutor',
        description: 'As a tutor for 3 years, I empower students with personalized support across subjects, fostering academic excellence and confidence in learning.'
    },
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: '3D Designer',
        description: 'With 3 years of 3D design expertise, I bring creative visions to life through stunning visualizations and immersive experiences for various industries.'
    },
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Musician',
        description: 'With 3 years of musical experience, I captivate audiences with my performances, blending passion and skill to create unforgettable musical moments.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Translator',
        description: 'Leveraging 3 years of translation expertise, I bridge language barriers with precision and cultural sensitivity, ensuring seamless communication across diverse audiences.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Writer',
        description: 'Leveraging 3 years of translation expertise, I bridge language barriers with precision and cultural sensitivity, ensuring seamless communication across diverse audiences.'
    },
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'programmer',
        description: 'I offer coding website and mobile app i have 3 years of the experience in this fields.'
    },
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'UI/UX Designer',
        description: 'With 3 years of UI/UX design experience, I create intuitive digital experiences blending aesthetics with functionality, from wireframing to prototyping.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Digital marketer',
        description: 'With 3 years in digital marketing, I drive brand visibility and conversion growth through targeted strategies spanning SEO, content, social media, and analytics.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Tutor',
        description: 'As a tutor for 3 years, I empower students with personalized support across subjects, fostering academic excellence and confidence in learning.'
    },
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: '3D Designer',
        description: 'With 3 years of 3D design expertise, I bring creative visions to life through stunning visualizations and immersive experiences for various industries.'
    },
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Musician',
        description: 'With 3 years of musical experience, I captivate audiences with my performances, blending passion and skill to create unforgettable musical moments.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Translator',
        description: 'Leveraging 3 years of translation expertise, I bridge language barriers with precision and cultural sensitivity, ensuring seamless communication across diverse audiences.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Writer',
        description: 'Leveraging 3 years of translation expertise, I bridge language barriers with precision and cultural sensitivity, ensuring seamless communication across diverse audiences.'
    },
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'programmer',
        description: 'I offer coding website and mobile app i have 3 years of the experience in this fields.'
    },
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'UI/UX Designer',
        description: 'With 3 years of UI/UX design experience, I create intuitive digital experiences blending aesthetics with functionality, from wireframing to prototyping.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Digital marketer',
        description: 'With 3 years in digital marketing, I drive brand visibility and conversion growth through targeted strategies spanning SEO, content, social media, and analytics.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Tutor',
        description: 'As a tutor for 3 years, I empower students with personalized support across subjects, fostering academic excellence and confidence in learning.'
    },
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: '3D Designer',
        description: 'With 3 years of 3D design expertise, I bring creative visions to life through stunning visualizations and immersive experiences for various industries.'
    },
    {
        img:'/profilG.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Musician',
        description: 'With 3 years of musical experience, I captivate audiences with my performances, blending passion and skill to create unforgettable musical moments.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Translator',
        description: 'Leveraging 3 years of translation expertise, I bridge language barriers with precision and cultural sensitivity, ensuring seamless communication across diverse audiences.'
    },
    {
        img:'/profilB.png',
        name:'NAME',
        rating: '4.8',
        price: '1700DA/h',
        job: '6 Jobs',
        jobName: 'Writer',
        description: 'Leveraging 3 years of translation expertise, I bridge language barriers with precision and cultural sensitivity, ensuring seamless communication across diverse audiences.'
    },
]

export default ProfilCat