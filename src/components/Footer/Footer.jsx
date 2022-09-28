import { Typography } from '@mui/material'
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is <b>Amalendu Pandey</b>. I am a{" "}
          <b>Full-Stack Developer</b> and a <b>Machine Learning Enthusiast</b>.
        </Typography>
        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Me</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Quick Links</Typography>
        <a href="https://github.com/amalendu315" target="blank">
          <BsGithub />
        </a>
        <a href="https://github.com/amalendu315" target="blank">
          <BsYoutube />
        </a>
        <a href="https://github.com/amalendu315" target="blank">
          <BsInstagram />
        </a>
        <a href="https://github.com/amalendu315" target="blank">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer