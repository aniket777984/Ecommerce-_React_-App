import React from 'react'
import {ReactNavbar} from "overlay-navbar";
import logo  from "../../../images/logo.png";
// import Redeem from "@material-ui/icons/Redeem";
// import Search  from "@material-ui/icons/Search";
import Search from "@material-ui/icons/Search";


const Header = () => {

  return (
    <ReactNavbar
    navColor1="white"
    navColor2="hsl(219, 48%, 8%)"
    burgerColor="hsl(250, 100%, 75%)"
    burgerColorHover="hsl(250, 100%, 75%)"
    logo={logo}
    logoWidth="250px"
    logoHoverColor="hsl(250, 100%, 75%)"
    nav2justifyContent="space-around"
    nav3justifyContent="space-around"
    link1Text="Home"
    link2Text="Products"
    link3Text="About"
    link4Text="Account"
    link1Url="/"
    link2Url="/products"
    link3Url="/about"
    link4Url="/account"
    link1ColorHover="white"
    link1Color="HSL(250, 100%, 75%)"
    link1Size="1.5rem"
    link1Padding="3vmax"
    profileIcon={true}
    ProfileIconElement={Search}
    profileIconColor="HSL(250, 100%, 75%)"
    profileIconColorHover="white"
    profileIconUrl= "/search"
    />
  )
}

export default Header