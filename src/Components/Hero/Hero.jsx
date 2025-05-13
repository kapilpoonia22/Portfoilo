import React from 'react';
import './Hero.css';
import profile_img from '../../Assets/profile_img.svg';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt='Profile' className='hero-img' />
      <h1>
        <span>I'm Kapil Poonia,</span> a passionate full stack developer.
      </h1>
      <p>
        I'm a fresher full stack developer with strong skills in frontend and backend technologies.
        I’m eager to contribute to real-world projects, continuously learn, and grow in a dynamic
        tech environment.
      </p>
      <div className='hero-action'>
        <button className='hero-btn'>Connect with me</button>
        <button className='hero-btn hero-btn-outline'>My Resume</button>
      </div>
    </div>
  );
};

export default Hero;
