import React from "react";
import image from "../images/pic4_edited.png";
import "../style.css";

export default function BasicInfo() {
  return (
    <>
      <div className="basicInfo">
        <img src={image} alt="" className="BI-img" />

        <h2 className="BI-h2">Vishal Tripathy</h2>
        <h4 className="BI-h4">Full Stack Web Developer</h4>
        <h6 className="BI-h6">Personal Website</h6>

        <button className="BI-btn btn-img-1" type="button">
          <a href="mailto:tripathyvishal7@gmail.com">
            <img
              src="https://clipground.com/images/email-logo-png-19.png"
              className="img"
              alt=""
            />
            Email
          </a>
        </button>
        <button className="BI-btn btn-img-2" type="button">
          <a href="https://www.linkedin.com/in/vishal-tripathy-363237237">
            <img
              src="https://idasmiles.com/wp-content/uploads/2018/11/NC-Linkedin-Icon-Blue.png"
              className="img"
              alt=""
            />
            LinkedIn
          </a>
        </button>
      </div>
    </>
  );
}
