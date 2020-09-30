import React, { Component } from "react";
import { Link } from "react-router-dom";
//Components
//Includes
import instagramIcon from "../../Assets/images/social-media-icons/instagram-gold.png";
import facebookIcon from "../../Assets/images/social-media-icons/facebook-gold.gif";
import twitterIcon from "../../Assets/images/social-media-icons/twitter-gold.png";
import skypeIcon from "../../Assets/images/social-media-icons/skype-gold.png";
import youtubeIcon from "../../Assets/images/social-media-icons/youtube-gold.png";
import emailIcon from "../../Assets/images/social-media-icons/email-gold.png";
import phoneIcon from "../../Assets/images/social-media-icons/phone-gold.png";
import pinIcon from "../../Assets/images/social-media-icons/pin-gold.png";

class Footer extends Component {
  render() {
    return (
      <footer className="align-items-center footer-temp">
        <div className="row outer-container mt-3">
          <div className="col-md-4 mt-3">
            <span className="footer-mainheading">WHO WE ARE</span>
            <hr />
            <div className="inner-container">
              <div className="mt-3 footer-subheading"> About us</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="footer-subheading mt-3">Our Office</div>
              <div>
                <img src={pinIcon} width="3%" alt="pin-icon" /> XYZ Street Address, City, State/Province/Region
              </div>
              <div className="mt-3 footer-subheading">Contact Us</div>
              <div>
                <img src={phoneIcon} width="3%" alt="phone-icon" />
                +9 9999 999 999
              </div>
              <div>
                <img src={emailIcon} width="3%" alt="email-icon" />{" "}
                youremail@youremail.com
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <span className="footer-mainheading">QUICK LINKS</span>
            <hr />
            <div className="mt-3 inner-container">
              <div>
                <Link to="/simple-business-website-template/">Home</Link>
              </div>
              <div>
                <Link to="/simple-business-website-template/">What We Do</Link>
              </div>
              <div>
                <Link to="/simple-business-website-template/">Contact Us</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <span className="footer-mainheading">STAY CONNECTED</span>
            <hr />
            <div className="inner-container mt-3">
              Subscribe For More Information
            </div>
            <div className="form-row mt-3">
              <div className="col">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email Address"
                />
              </div>
              <div className="col-auto">
                <button className="btn">Subscribe</button>
              </div>
            </div>

            <div className="social-media-links">
              <div className="inner-container mt-3">
                <Link to="/simple-business-website-template/" className="ml-2">
                  <img
                    src={facebookIcon}
                    alt="facebook-logo-icon"
                    width="18"
                    height="18"
                  />
                </Link>
                <Link to="/simple-business-website-template/" className="ml-2">
                  <img
                    src={instagramIcon}
                    alt="instagram-logo-icon"
                    width="18"
                    height="18"
                  />
                </Link>
                <Link to="/simple-business-website-template/" className="ml-2">
                  <img
                    src={skypeIcon}
                    alt="skype-logo-icon"
                    width="18"
                    height="18"
                  />
                </Link>
                <Link to="/simple-business-website-template/" className="ml-2">
                  <img
                    src={youtubeIcon}
                    alt="youtube-logo-icon"
                    width="18"
                    height="18"
                  />
                </Link>
                <Link to="/simple-business-website-template/" className="ml-2">
                  <img
                    src={twitterIcon}
                    alt="twitter-logo-icon"
                    width="18"
                    height="18"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3 copyright-social-links outer-container">
          <hr />
          <div className="col-md-6">
            Copyright &copy; 2020. All Rights Reserved By Business Name
          </div>
          <div className="col-md-6 terms-conditions">
            <Link to="/#">Terms & Conditions</Link>
            <span className="ml-1 mr-1">|</span>
            <Link to="/#">Privacy & Policy</Link>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
