import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";
import logo from "../assets/logo.jpg"

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
      <aside>
        <a href="/"><img className="h-20 w-20 rounded-full" src={logo} alt="" /></a>
        <p className="font-bold">
          AI Model Inventory Manager
          <br />
          Providing reliable AI engine since 2018
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://x.com/Dibakar1806">
            <FaXTwitter className="h-10 w-10"></FaXTwitter>
          </a>
          <a href="https://github.com/Dibakar-Biswas?tab=repositories">
            <FaGithub className="h-10 w-10"></FaGithub>
          </a>
          <a href="https://www.facebook.com/dibakar.biswas.640187/">
            <FaFacebook className="h-10 w-10"></FaFacebook>
          </a>
          <a href="https://www.instagram.com/dibakar_186">
          <FaInstagram className="h-10 w-10"></FaInstagram>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
