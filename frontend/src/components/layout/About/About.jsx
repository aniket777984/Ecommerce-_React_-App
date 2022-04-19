import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location ="mailto:aniket777984@gmail.com";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About The Founder</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "12vmax", height: "12vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/drujgzuhq/image/upload/v1650366072/Users/Photo_png_latest_1_cukeid.jpg"
              alt="Founder"
            />
            <Typography>Aniket Kumar Gupta</Typography>
            <Button onClick={visitInstagram} color="primary">
              Contact Mail
            </Button>
            <span>
              This is a sample wesbite made by @AniketKumar. This is the Biggest project on which I have worked on and made this awesome Ecommerce website
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Contact Links</Typography>
            <a
              href="https://www.youtube.com/c/EasyTutorialsVideo"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/aniket777984/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
