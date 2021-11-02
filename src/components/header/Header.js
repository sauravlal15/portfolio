import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import DescriptionIcon from "@material-ui/icons/Description";
import WorkIcon from "@material-ui/icons/Work";
import NatureIcon from "@material-ui/icons/Nature";
import CancelIcon from "@material-ui/icons/Cancel";
import AppsIcon from "@material-ui/icons/Apps";

const Header = () => {
  const [isActive, setisActive] = useState(false);


  const onHandleClick = () => {
    setisActive(true);
  };

  const handleClickremove = () => {
    setisActive(false);
  };

  const hideIcon = {
    display: "none",
  };

  const styles = {
    bottom: "0",
  };

  return (
    <div>
      <div className="header header-mobile" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            Saurav
          </a>
          <div
            className="nav__menu"
            style={isActive ? styles : null}
            id="nav__menu"
          >
            <ul className="nav__list grid">
              <li className="nav__item">
                <a
                  href="#home"
                  className="nav__link"
                  onClick={handleClickremove}
                >
                  <div className="nav__icon">
                    <HomeIcon />
                  </div>
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#about"
                  className="nav__link"
                  onClick={handleClickremove}
                >
                  <div className="nav__icon">
                    <PersonIcon />
                  </div>
                  About
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#skills"
                  className="nav__link"
                  onClick={handleClickremove}
                >
                  <div className="nav__icon">
                    <DescriptionIcon />
                  </div>
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#qualification"
                  className="nav__link"
                  onClick={handleClickremove}
                >
                  <div className="nav__icon">
                    <WorkIcon />
                  </div>
                  Qualifications
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#portfolio"
                  className="nav__link"
                  onClick={handleClickremove}
                >
                  <div className="nav__icon">
                    <NatureIcon />
                  </div>
                  Portfolio
                </a>
              </li>
            </ul>
            <div className="nav__close">
              <CancelIcon id="nav-close" onClick={handleClickremove} />
            </div>
          </div>
          <div className="nav__btns">
            <div className="nav__toggle" id="nav-toggle">
              <div className="nav__icon">
                <AppsIcon
                  style={isActive ? hideIcon : null}
                  onClick={() => onHandleClick()}
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
