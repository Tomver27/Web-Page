import React from 'react';
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaBriefcase
} from 'react-icons/fa';
import './SidebarSocial.css';

export default function SidebarSocial() {
  return (
    <div className="sidebar-social">
      <a
        href="https://github.com/Tomver27"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      
{ /*<a
        href="https://twitter.com/ElTomver"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>*/}
      <a
        href="https://instagram.com/tomas_vera_27"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      
      {/*
  <a
    href="https://www.elempleo.com/perfil/Tomver27"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaBriefcase />
  </a>
  <a
    href="https://www.linkedin.com/in/Tomver27"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>
*/}

      
    </div>
  );
}
