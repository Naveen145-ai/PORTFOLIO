export default function HomePage() {
  return (
    <div className="bg-black">

      {/* Home Section */}
      <div id="home" style={{ height: "100vh", padding: "40px" }}>
        <h1>Home</h1>
        <p>Welcome to my portfolio!</p>

        <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px"
  }}
>
  <img
    src="/profile.jpg"
    alt="profile"
    style={{
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "3px solid #111"
    }}
  />

 
</div>

       <h1 
       style={{color:"white", display:"flex",alignItems:"center",justifyContent:"center", marginTop:"30px", fontSize:"50px"}}>
        I'm Naveen Full Stack Developer</h1>


        <div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "30px"
}}>
  <button
    style={{
      color: "white",
      fontSize: "20px",
      padding: "10px 20px",
      background: "orange",
      borderRadius: "8px",
      border: "none"
    }}
  >
    Connect with me
  </button>
</div>

     


      </div>

      {/* About Section */}
      <div id="about" style={{ height: "100vh", padding: "40px" }}>
        <h1>About Us</h1>
        <p>This is all about me...</p>
      </div>

      {/* Services Section */}
      <div id="services" style={{ height: "100vh", padding: "40px" }}>
        <h1>My Services</h1>
        <p>I provide web development and UI/UX design.</p>
      </div>

      {/* Interests Section */}
      <div id="interests" style={{ height: "100vh", padding: "40px" }}>
        <h1>My Areas of Interest</h1>
        <p>AI, ML, Cloud Computing...</p>
      </div>

      {/* Contact Section */}
      <div id="contact" style={{ height: "100vh", padding: "40px" }}>
        <h1>Contact Us</h1>
        <p>Email: example@gmail.com</p>
      </div>

    </div>
  );
}
