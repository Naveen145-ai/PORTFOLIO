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
            marginTop: "30px",
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
              border: "3px solid #111",
            }}
          />
        </div>

        <h1
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30px",
            fontSize: "50px",
          }}
        >
          I'm Naveen — Full Stack Developer
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <button
            style={{
              color: "white",
              fontSize: "20px",
              padding: "10px 20px",
              background: "orange",
              borderRadius: "8px",
              border: "none",
            }}
          >
            Connect with me
          </button>
        </div>
      </div>




              {/* About Section */}
<div
  id="about"
  style={{
    height: "100vh",
    padding: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
  }}
>
  {/* LEFT TEXT */}
  <div style={{ width: "50%", lineHeight: "1.7", fontSize: "18px" }}>
    <h1 style={{ fontSize: "45px", marginBottom: "20px" }}>About Me</h1>
    <p>
      I am a passionate Full Stack Developer skilled in building scalable,
      responsive and visually stunning web applications.
    </p>

    <p style={{ marginTop: "15px" }}>
      My strongest abilities include creating fast front-ends, efficient
      back-ends, and cloud-powered apps using modern technologies.
    </p>
  </div>

  {/* RIGHT — SMALLER SOLAR SYSTEM */}
  <div
    style={{
      width: "50%",
      position: "relative",
      height: "350px", // REDUCED HEIGHT
    }}
  >
    {/* SMALLER SUN */}
    <div
      style={{
        width: "70px",   // reduced from 120px
        height: "70px",
        background: "yellow",
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "0 0 25px yellow",
      }}
    ></div>

    {/* PLANETS WITH ICONS — REDUCED ORBITS + SIZES */}
    {[
      { name: "HTML", icon: "/icons/html.png", size: 28, orbit: 70, speed: 6 },
      { name: "CSS", icon: "/icons/css.png", size: 30, orbit: 100, speed: 8 },
      { name: "JavaScript", icon: "/icons/js.png", size: 32, orbit: 130, speed: 10 },
      { name: "React", icon: "/icons/react.png", size: 30, orbit: 160, speed: 12 },
      { name: "NodeJS", icon: "/icons/node.png", size: 32, orbit: 190, speed: 14 },
      { name: "MongoDB", icon: "/icons/mongo.png", size: 30, orbit: 220, speed: 16 },
      { name: "NextJS", icon: "/icons/next.png", size: 32, orbit: 250, speed: 18 },
      { name: "Tailwind", icon: "/icons/tailwind.png", size: 30, orbit: 280, speed: 20 },
    ].map((planet, index) => (
      <div
        key={index}
        style={{
          width: planet.orbit * 2,
          height: planet.orbit * 2,
          border: "1px dashed orange",
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: `spin${index} ${planet.speed}s linear infinite`,
        }}
      >
        {/* Planet Icon */}
        <div
          style={{
            width: planet.size,
            height: planet.size,
            borderRadius: "50%",
            position: "absolute",
            top: "50%",
            left: "100%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={planet.icon}
            alt={planet.name}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid orange",
              boxShadow: "0 0 8px orange",
            }}
          />
        </div>
      </div>
    ))}
  </div>

  {/* ANIMATIONS */}
  <style>
    {`
      ${[...Array(8)]
        .map(
          (_, i) => `
        @keyframes spin${i} {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `
        )
        .join("")}
    `}
  </style>
</div>




{/* Areas of Interest */}
<div style={{ padding: "40px" }}>

  <h1
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "40px"
    }}
  >
    My Services
  </h1>

  {/* Yellow line */}
  <div
    style={{
      width: "150px",
      height: "4px",
      backgroundColor: "yellow",
      margin: "15px auto",
      borderRadius: "10px"
    }}
  ></div>

  {/* GRID */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      marginTop: "40px",
      padding: "10px"
    }}
  >

    {/* WEB DEVELOPMENT */}
    <div
      style={{
        backgroundColor: "#111",
        padding: "20px",
        borderRadius: "15px",
        color: "white",
        textAlign: "center",
        border: "2px solid yellow"
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/919/919828.png"
        alt="web"
        style={{ width: "60px", marginBottom: "10px" }}
      />
      <h2>Web Development</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "15px" }}>
        <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="react" style={{ width: "35px" }} />
        <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="node" style={{ width: "35px" }} />
        <img src="https://cdn-icons-png.flaticon.com/512/825/825448.png" alt="mongodb" style={{ width: "35px" }} />
        <img src="https://cdn-icons-png.flaticon.com/512/919/919836.png" style={{ width: "35px" }} />
      </div>
    </div>

    {/* APP DEVELOPMENT */}
    <div
      style={{
        backgroundColor: "#111",
        padding: "20px",
        borderRadius: "15px",
        color: "white",
        textAlign: "center",
        border: "2px solid yellow"
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/888/888839.png"  // ANDROID LOGO
        alt="android"
        style={{ width: "60px", marginBottom: "10px" }}
      />
      <h2>App Development</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "15px" }}>
        <img src="https://cdn-icons-png.flaticon.com/512/875/875209.png" alt="react-native" style={{ width: "35px" }} />
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968946.png" alt="firebase" style={{ width: "35px" }} />
        <img src="https://cdn-icons-png.flaticon.com/512/5969/5969282.png" alt="springboot" style={{ width: "35px" }} />
      </div>
    </div>

    {/* DEVOPS */}
    <div
      style={{
        backgroundColor: "#111",
        padding: "20px",
        borderRadius: "15px",
        color: "white",
        textAlign: "center",
        border: "2px solid yellow"
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/4248/4248443.png" // DEVOPS LOGO
        alt="devops"
        style={{ width: "60px", marginBottom: "10px" }}
      />
      <h2>DevOps</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "15px" }}>
        <img src="https://cdn-icons-png.flaticon.com/512/919/919853.png" alt="docker" style={{ width: "35px" }} />
        <img src="https://cdn-icons-png.flaticon.com/512/919/919821.png" alt="aws" style={{ width: "35px" }} />
        <img src="https://cdn-icons-png.flaticon.com/512/906/906361.png" alt="cicd" style={{ width: "35px" }} />
      </div>
    </div>

  </div>

</div>






    </div>
  );
}
