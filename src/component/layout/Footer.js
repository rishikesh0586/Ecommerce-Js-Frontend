import React from "react";
// import playStore from "../../../images/playstore.png";
// import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img  alt="playstore" />
        <img  alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Rishikesh</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.linkedin.com/in/rishikesh-pandey-61ab30219/">Instagram</a>
        <a href="https://www.linkedin.com/in/rishikesh-pandey-61ab30219/">Youtube</a>
        <a href="https://www.linkedin.com/in/rishikesh-pandey-61ab30219/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
