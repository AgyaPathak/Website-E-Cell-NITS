import logo from "./ecell-logo.png";
import "./footer.min.css";
import {
  FaFacebook,
  FaInstagram,
  FaUserTie,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaArrowCircleUp
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="fcol-1">
          <div>
            <img src={logo} alt="Ecell" />
            <h1>E-Cell</h1>
            <h3>NIT Silchar</h3>
          </div>
          <ul>
            <li>
              <FaUserTie />
              <span>Entropreneur</span>
            </li>
            <li>
              <FaMapMarkerAlt />
              <span>NIT Silchar, Silchar, Assam, India,788010</span>
            </li>
            <li>
              <FaPhoneAlt />
              <span>0123456789</span>
            </li>
          </ul>
        </div>
        <div className="fcol-2">
          <h2>Be Social</h2>
          <hr />
          <ul>
            <li>
              <a href="https://www.facebook.com" target="__blank">
                <FaFacebook className="icons" />
              </a>
              <p>
                <span>F</span>acebook
              </p>
            </li>
            <li>
              <a href="https://www.facebook.com" target="__blank">
                <FaInstagram className="icons" />
              </a>
              <p>
                <span>I</span>nstagram
              </p>
            </li>
            <li>
              <a href="https://www.facebook.com" target="__blank">
                <FaLinkedinIn className="icons" />
              </a>
              <p>
                <span>L</span>inkedIn
              </p>
            </li>
          </ul>
        </div>
        <div className="fcol-3">
          <h2>Subscribe</h2>
          <hr />
          <p>Keep yourself updated. Subscribe to our newsletter</p>
          <input type="email" placeholder="Enter Your Email" />
          <button>
            <FaEnvelope size="1.6rem" color="#123" />
          </button>
        </div>
      </div>
      <div className="footer-bottom">
      <p>All Rights Reserved © E-Cell, NIT Silchar</p>
      <button>
        <FaArrowCircleUp size="1.2rem" />
      </button>
    </div>
    </footer>
  );
};

export default Footer;
