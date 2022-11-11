import React from "react";
import { BsGlobe2, BsEnvelope, BsFilesAlt } from "react-icons/bs";
import { RiTrelloLine } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";
import { SiZoom } from "react-icons/si";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Apps = () => {
  return (
    <>
      <Header />
      <div className="app-heading">
        <h1>L'fish Apps</h1>
      </div>
      <div className="apps-container">
        <Link to="/">
          <div className="app">
            <BsGlobe2 className="icon" />
            <p>Site Web</p>
          </div>
        </Link>
        <a href="https://server245.web-hosting.com:2096/">
          <div className="app">
            <BsEnvelope className="icon" />
            <p>Email</p>
          </div>
        </a>
        <a href="https://trello.com/login">
          <div className="app">
            <RiTrelloLine className="icon" />
            <p>Trello</p>
          </div>
        </a>
        <a href="https://zoom.us/signin#/login">
          <div className="app">
            <SiZoom
              className="icon"
              style={{
                border: "3px solid black",
                width: "3.5rem",
                borderRadius: "7px",
              }}
            />
            <p>Zoom</p>
          </div>
        </a>
        <a href="https://www.google.com/intl/fr/drive/">
          <div className="app">
            <BsFilesAlt className="icon" />
            <p>Fichiers</p>
          </div>
        </a>
        <a href="https://www.youtube.com/channel/UCYwdSLndTe823w9mpcr2nbw">
          <div className="app">
            <AiOutlineYoutube className="icon" />
            <p>Tutoriels</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Apps;
