import React from "react";
import MenuList from "./MenuList";
import { FooterContainer } from "./styles";
import Svgs from "./Svgs";

const NavigateMenus = [
  {
    title: "Home",
    url: "#",
  },
  {
    title: "About Us",
    url: "#",
  },
  {
    title: "Contact Us",
    url: "#",
  },
  {
    title: "Team",
    url: "#",
  },
];

const LinksMenus = [
  {
    title: "Terms & Condition",
    url: "#",
  },
  {
    title: "Privacy Policy",
    url: "#",
  },
  {
    title: "FAQ",
    url: "#",
  },
  {
    title: "Support",
    url: "#",
  },
];

const Footer = () => {
  return (
    <FooterContainer>
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="logo">
              <a href="index.html">
                <img src="assets/images/logo-bottom.svg" alt="logo" />
              </a>
              <div className="desc">
                The combination of Arab Network's unique & supportive community
                and its highly experienced team of developers makes this one of
                the most highly revered projects in the cryptospace and
                especially in the Arab world.
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <MenuList title="Navigate" menus={NavigateMenus} />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <MenuList title="Links" menus={LinksMenus} />
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="footer-links">
                  <h5 className="title">Follow Us On</h5>
                  <Svgs />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <span>Copyright © 2021 Arab Network. All Rights Reserved.</span>
        </div>
      </footer>
    </FooterContainer>
  );
};

export default Footer;
