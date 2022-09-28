import React from "react";
import { ReactNavbar } from "overlay-navbar";
import { FaUserAlt } from "react-icons/fa";
import logo from "../../Images/logo.png";

const Header = () => {
  return (
    <ReactNavbar
      navColor1="white"
      navColor2="hsl(219,48%,8%)"
      burgerColor="hsl(250,100%,75%)"
      burgerColorHover="hsl(250,100%,75%)"
      logoWidth="250px"
      logo={logo}
      logoHoverColor="hsl(250,100%,75%)"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="About"
      link3Text="Projects"
      link4Text="Contact"
      link1Url="/"
      link2Url="/about"
      link3Url="/projects"
      link4Url="/contact"
      link1Color="hsl(250,100%,75%)"
      link1ColorHover="white"
      link1Size="1.5rem"
      link1Padding="3vmax"
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      profileIconColor="hsl(250,100%,75%)"
      profileIconColorHover="white"
    />
  );
};

export default Header;
