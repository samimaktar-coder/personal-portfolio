import React from "react";
import "./home.css";
import { star } from "../../img";
import { IoIosArrowDown } from "react-icons/io";

function Home() {
  return (
    <div className='home' id='home'>
      <div className='wrapper'></div>
      <div className='home__content'>
        <div className='home__heading'>
          <h1>Hi! I'm Samim.</h1>
          <h1>
            A Tech Enthusiast.
          </h1>
          <img src={star} alt='star-img' className='star_1' />
          <img src={star} alt='star-img' className='star_2' />
        </div>
        <p>A passionate Frontend Developer and aspiring Fullstack Developer.</p>
        <a href='#about' className='arrow-container'>
          <div className='arrow-2'>
            <IoIosArrowDown />
          </div>
          <div className='arrow-1 zoomIn'></div>
        </a>
      </div>
    </div>
  );
}

export default Home;
