"use client";

export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#111",
        padding: "15px",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* LEFT SIDE */}
      <h2 style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "50px"
}}>Naveen</h2>

      {/* CENTER NAV BUTTONS */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About Us</button>
        <button onClick={() => scrollToSection("services")}>My Services</button>
        <button onClick={() => scrollToSection("interests")}>
          My Areas of Interest
        </button>
        <button onClick={() => scrollToSection("contact")}>Contact Us</button>
      </div>

      {/* RIGHT SIDE */}
      <button
        style={{
          padding: "8px 14px",
          background: "orange",
          color: "black",
          borderRadius: "6px",
          fontWeight: "bold",
          cursor: "pointer",
          marginRight: "50px",
        }}
      >
        Connect with me
      </button>
    </div>
  );
}
