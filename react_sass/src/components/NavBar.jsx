import React from "react";
import "../styles/Navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/profile">Profile</a>
        <a href="/context">Context</a>
      </div>
    </div>
  );
}

export default NavBar;
