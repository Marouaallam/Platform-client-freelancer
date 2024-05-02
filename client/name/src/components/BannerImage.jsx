const BannerImage = () => {
  return (
    <div className='container' style={{ position: 'relative', width: '100%', height: '250px', overflow: 'hidden', borderRadius : 30 }}>
      <a href="/signup" className="btn" style={{ position: 'absolute', bottom: 30, left: 120, transform: 'translate(-50%, -50%)' }}>
        Sign up
      </a>      
      <div style={{ position: 'absolute', top: -120, left: -100, width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle at center, #158BFC 0%, rgba(21, 139, 252, 0) 70%)', filter: 'blur(120px)' }}></div>
      <div style={{ position: 'absolute', bottom: -120, right: -100, width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle at center,#647DFF 0%, rgba(255, 255, 255, 0) 70%)', filter: 'blur(120px)' }}></div>
        <h1 className="custom-text" style={{ position: 'absolute', top: 120, left: 80, fontSize: '50px', fontWeight: 760}}>Predictible Growth</h1>
        <h1 className="custom-text" style={{ position: 'absolute', top: 180, left: 80, fontSize: '50px', fontWeight: 760}}>Starts Here!</h1>
        <p className="custom-text" style={{ position: 'absolute', top: 280, left: 80, fontWeight: 80}}>join a ibrant community of job seekers, and <br /> industry professionals for networking and <br /> support</p>
    </div>
  )
}
// <div className='flex justify-end ml-40  px-6 py-2 text-white rounded-lg bg-[#647DFF]' style={{width: 102, bottom: 100,}}>Sign up</div>

export default BannerImage