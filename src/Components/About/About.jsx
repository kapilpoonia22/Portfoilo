import React from 'react'
import './About.css';
import theme_pattern from '../../Assets/theme_pattern.svg';
import profile_img from '../../Assets/about_profile.svg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-tittle'>
        <h1>About Me</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className='about-sections'>
        <div className='about-left'>
          <img src={profile_img} alt='' />
        </div>
        <div className='about-right'>
          <div className='about-para'>
            <p>I am a passionate Frontend Developer focused on building clean and user-friendly websites. I love turning ideas into reality through code.</p>
            <p>As a freelance developer, I continuously explore new technologies and work on real-world projects to improve my skills and deliver value to clients.</p>
          </div>
          <div className='about-skills'>
            <div className='about-skill'><p>HTML & CSS</p><hr style={{ width: "60%" }} /></div>
            <div className='about-skill'><p>React JS</p><hr style={{ width: "50%" }} /></div>
            <div className='about-skill'><p>JavaScript</p><hr style={{ width: "55%" }} /></div>
            <div className='about-skill'><p>Bootstrap</p><hr style={{ width: "60%" }} /></div>
          </div>
        </div>
      </div>
      <div className='about-achievments'>
  <div className='about-achievment'>
    <h1>✔️</h1>
    <p>READY TO LEARN</p>
  </div>
  <hr />
  <div className='about-achievment'>
    <h1>✔️</h1>
    <p>OPEN FOR INTERNSHIPS</p>
  </div>
  <hr />
  <div className='about-achievment'>
    <h1>✔️</h1>
    <p>BUILDING PROJECTS</p>
  </div>
</div>

    </div>
  )
}

export default About;
