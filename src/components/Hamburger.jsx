import { useState } from "react";
import { Text} from "@chakra-ui/react";
import "./Hamburger.css";

const Hamburger = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky-header">
      <nav className="navbar">
      <div className="brand">
          <Text className="typing-text">
            Ashish Danu
          </Text>
        </div>
        <ul className={`nav_menu ${menuOpen ? "active" : ""}`}>
        <li className="nav_item">
  <a href="/Ashishdanu.pdf" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
    Resume
  </a>
</li>


          <li className="nav_item">
            <a href="#head" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li className="nav_item">
            <a href="#about" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li className="nav_item">
            <a href="#techstack" onClick={handleLinkClick}>
              Tech Stack
            </a>
          </li>

          <li className="nav_item">
            <a href="#education" onClick={handleLinkClick}>
              Education
            </a>
          </li>
          <li className="nav_item">
            <a href="#projects" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li className="nav_item">
            <a href="#Github" onClick={handleLinkClick}>
              Github
            </a>
          </li>
          <li className="nav_item">
            <a href="#footer" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={handleHamburgerClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Hamburger;
