import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <div>
      <footer className="footer section">
        <div className="footer__bg">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">Saurav Lal</h1>
              <span className="footer__subtitle">
                Developer | Sports Programmer
              </span>
            </div>
            <ul className="footer__links">
              <li>
                <a href="#about" className="footer__link">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="footer__link">
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="mailto:sauravkumarlal7060@gmail.com?subject=Hey Saurav"
                  target="_blank"
                  className="footer__link"
                >
                  ContactMe
                </a>
              </li>
            </ul>
            <div className="footer__socials">
              <a
                href="https://www.facebook.com/sauravkumar.lal.50/"
                className="footer__social"
                target="_blank"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://github.com/saurav-skl"
                className="footer__social"
                target="_blank"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://twitter.com/SauravLal9"
                className="footer__social"
                target="_blank"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
          <p className="footer__copy">&#169;SauravLal, All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
