import React from "react";
import "./contact.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function SocialLinks() {
  return (
    <div>
      <div className='social__links'>
        <a
          href='https://github.com/samimaktar-coder'
          target='_blank'
          aria-label='Github'
        >
          <FaGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/samimaktr/'
          target='_blank'
          aria-label='LinkedIn'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://twitter.com/hellosamaktr'
          target='_blank'
          aria-label='Twitter'
        >
          <FaXTwitter />
        </a>
        <a
          href='https://www.instagram.com/iam.samimaktar/'
          target='_blank'
          aria-label='Instagram'
        >
          <FaInstagram />
        </a>
        <span></span>
      </div>
      <div className='email_id'>
        <a target="_blank" href='mailto:hi.samimaktar@gmail.com'>hi.samimaktar@gmail.com</a>
        <span></span>
      </div>
    </div>
  );
}

export default SocialLinks;
