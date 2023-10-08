import React from "react";
import "./about.css";
import { skillsData } from "../../data/skillsData";
import { BsFileEarmarkPdf } from "react-icons/bs";

function About() {
  return (
    <div className='container' id='about'>
      <h1 className='heading'>About Me</h1>
      <div className='about__content'>
        <div className='about__info'>
          <h2>Hi.. I'm Samim Aktar,</h2>
          <p>
            <span>
              I am a frontend developer dedicated to crafting visually
              captivating and responsive web applications. My tech stack
              includes React, Redux Toolkit, TailwindCSS.
            </span>
            <span>
              I have honed my skills through countless hours of practice, trial
              and error, and a determination to overcome challenges, constantly
              pushing myself to deliver high-quality solutions. My hunger for
              knowledge extends beyond frontend development, as I'm currently
              immersing myself in the world of backend development. Now I am
              learning Next JS and Node JS.
            </span>
            <span>
              If you seek a dependable and proficient frontend developer to help
              manifest your web project, your search ends here. My unwavering
              commitment lies in empowering clients to reach their target and
              providing exceptional service every step of the way.
            </span>
          </p>
        </div>
        <div className='about__skills'>
          <h2>Language and Tools</h2>

          <div className='about__skills_grid'>
            {skillsData.map((skill) => (
              <div key={skill.id} className='about__skill'>
                <div className='skill_img'>
                  <img src={skill.img} alt='skill-img' />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <a href='#'>
        <button className='about-button'>
          <BsFileEarmarkPdf /> Download Resume
        </button>
      </a> */}
    </div>
  );
}

export default About;
