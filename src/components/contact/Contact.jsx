import React, { useRef, useState } from "react";
import "./contact.css";
import { earth } from "../../img";
import { BsSendFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_56ehrhk",
        "template_l8fqebt",
        form.current,
        "eYImyMeeRER8Gd5Cv"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 1500);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='container' id='contact'>
      <h1 className='heading'>Contact Me</h1>
      <div className='contact__content'>
        <div className='contact-img'>
          <img src={earth} alt='contact-img' />
        </div>
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
          <div className='input-control'>
            <span>Name :</span>
            <input
              type='text'
              placeholder='Enter Your Name'
              name='from_name'
              required
            />
          </div>
          <div className='input-control margin'>
            <span>Email :</span>
            <input
              type='email'
              placeholder='Enter Your Email'
              name='your_email'
              required
            />
          </div>
          <div className='input-control margin'>
            <span>Message :</span>
            <textarea placeholder='Message' name='message' required></textarea>
          </div>

          <button type='submit'>
            <BsSendFill />
            <p>Send Message</p>
          </button>
          <div className={`alert ${showAlert ? "show" : ""}`}>
            ✅ Email sent Successfully.
          </div>
        </form>
      </div>
      <div className='footer'>
        <div className='social_icons'>
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
          <a href='mailto:hi.samimaktar@gmail.com' target='_blank'>
            <HiMail />
          </a>
        </div>
        <p className='copyright'>
          Designed & Built by{" "}
          <a href='https://github.com/samimaktar-coder' target='_blank'>
            Samim Aktar
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
