import React from 'react';
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import './SidebarSocial.css';

export default function SidebarSocial() {
  return (
    <div className="sidebar-social">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    </div>
  );
}