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

        {/* RIGHT — SOLAR SYSTEM */}
        <div
          style={{
            width: "50%",
            position: "relative",
            height: "350px",
          }}
        >
          {/* SUN */}
          <div
            style={{
              width: "70px",
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

          {/* PLANETS */}
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

      {/* Services */}
      <div style={{ padding: "40px" }}>
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "40px",
          }}
        >
          My Services
        </h1>

        <div
          style={{
            width: "150px",
            height: "4px",
            backgroundColor: "yellow",
            margin: "15px auto",
            borderRadius: "10px",
          }}
        ></div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "40px",
            padding: "10px",
          }}
        >
          {/* WEB */}
          <div
            style={{
              backgroundColor: "#111",
              padding: "20px",
              borderRadius: "15px",
              color: "white",
              textAlign: "center",
              border: "2px solid yellow",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/919/919828.png"
              alt="web"
              style={{ width: "60px", marginBottom: "10px" }}
            />
            <h2>Web Development</h2>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                marginTop: "15px",
              }}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" style={{ width: "35px" }} />
              <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" style={{ width: "35px" }} />
              <img src="https://cdn-icons-png.flaticon.com/512/825/825448.png" style={{ width: "35px" }} />
              <img src="https://cdn-icons-png.flaticon.com/512/919/919836.png" style={{ width: "35px" }} />
            </div>
          </div>

          {/* APP */}
          <div
            style={{
              backgroundColor: "#111",
              padding: "20px",
              borderRadius: "15px",
              color: "white",
              textAlign: "center",
              border: "2px solid yellow",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/888/888839.png"
              alt="android"
              style={{ width: "60px", marginBottom: "10px" }}
            />
            <h2>App Development</h2>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                marginTop: "15px",
              }}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/875/875209.png" style={{ width: "35px" }} />
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968946.png" style={{ width: "35px" }} />
              <img src="https://cdn-icons-png.flaticon.com/512/5969/5969282.png" style={{ width: "35px" }} />
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
              border: "2px solid yellow",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4248/4248443.png"
              alt="devops"
              style={{ width: "60px", marginBottom: "10px" }}
            />
            <h2>DevOps</h2>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                marginTop: "15px",
              }}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/919/919853.png" style={{ width: "35px" }} />
              <img src="https://cdn-icons-png.flaticon.com/512/919/919821.png" style={{ width: "35px" }} />
              <img src="https://cdn-icons-png.flaticon.com/512/906/906361.png" style={{ width: "35px" }} />
            </div>
          </div>
        </div>
      </div>

      {/* ============================
          MY LATEST WORK
      ============================ */}
      <div id="projects" style={{ padding: "60px 40px", background: "black" }}>
        <h1
          style={{
            color: "white",
            fontSize: "45px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          My latest work
        </h1>

        <div
          style={{
            width: "50px",
            height: "18px",
            background:
              "linear-gradient(90deg, #ff00d4, #ff4fd8, #ff8ee4, #ffa6ff)",
            margin: "-15px auto 30px",
            borderRadius: "20px",
          }}
        ></div>

        {/* ⭐ FIXED: Now showing only 3 per row ⭐ */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",   // ⬅ CHANGED HERE
            gap: "25px",
            marginTop: "40px",
          }}
        >
          {[
            "https://i.imgur.com/Z7AzH2c.png",
            "https://i.imgur.com/eY2nZPu.png",
            "https://i.imgur.com/HjjR8BR.png",
            "https://i.imgur.com/JAvz3Gj.png",
            "https://i.imgur.com/FyUd2sF.png",
            "https://i.imgur.com/zsRfH9f.png",
          ].map((img, i) => (
            <div
              key={i}
              style={{
                background: "#111",
                padding: "10px",
                borderRadius: "15px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              <img
                src={img}
                alt="project"
                style={{
                  width: "500%",
                  height: "200px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT SECTION */}
<div
  id="contact"
  style={{
    padding: "60px 40px",
    background: "black",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    gap: "40px",
  }}
>

  {/* LEFT SIDE */}
  <div style={{ width: "45%" }}>
    <h1
      style={{
        fontSize: "50px",
        fontWeight: "bold",
        background: "linear-gradient(90deg, #ff00d4, #ffa600)",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      Let’s talk
    </h1>

    <p style={{ marginTop: "10px", color: "#ccc", fontSize: "18px" }}>
      I'm currently available to take on new projects, so feel free to send me a
      message about anything that you want me to work on. You can contact anytime.
    </p>

    <div style={{ marginTop: "25px" }}>
      {/* EMAIL */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <span style={{ fontSize: "24px", marginRight: "10px" }}>📧</span>
        <p style={{ fontSize: "18px" }}>naveensrinivas145@gmail.com</p>
      </div>

      {/* PHONE */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <span style={{ fontSize: "24px", marginRight: "10px" }}>📞</span>
        <p style={{ fontSize: "18px" }}>+772–825–524</p>
      </div>

      {/* LOCATION */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ fontSize: "24px", marginRight: "10px" }}>📍</span>
        <p style={{ fontSize: "18px" }}>CA, United States</p>
      </div>
    </div>
  </div>

  {/* RIGHT SIDE – FORM */}
  <div style={{ width: "50%" }}>
    <label style={{ fontSize: "18px" }}>Your Name</label>
    <input
      type="text"
      placeholder="Enter your name"
      style={{
        width: "100%",
        padding: "15px",
        borderRadius: "8px",
        background: "#222",
        border: "none",
        marginBottom: "20px",
        color: "white",
      }}
    />

    <label style={{ fontSize: "18px" }}>Your Email</label>
    <input
      type="email"
      placeholder="Enter your email"
      style={{
        width: "100%",
        padding: "15px",
        borderRadius: "8px",
        background: "#222",
        border: "none",
        marginBottom: "20px",
        color: "white",
      }}
    />

    <label style={{ fontSize: "18px" }}>Write your message here</label>
    <textarea
      placeholder="Enter your message"
      style={{
        width: "100%",
        padding: "15px",
        borderRadius: "8px",
        background: "#222",
        border: "none",
        minHeight: "180px",
        color: "white",
      }}
    ></textarea>

    <button
      style={{
        marginTop: "25px",
        padding: "12px 25px",
        fontSize: "18px",
        borderRadius: "25px",
        border: "none",
        background: "linear-gradient(90deg, #ff00d4, #ffa600)",
        color: "white",
        cursor: "pointer",
      }}
    >
      Submit now
    </button>
  </div>
</div>

    </div>
    
  );
}
