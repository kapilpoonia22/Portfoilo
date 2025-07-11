import React from 'react';
import './MyWork.css';
import theme_pattern from '../../Assets/theme_pattern.svg';
import mywork_data from './../../Assets/mywork_data';
import arrow_icon from '../../Assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className='mywork-title'>
        <h1>My latest work</h1>
        <img src={theme_pattern} alt='' />
      </div>

      <div className='mywork-container'>
        {mywork_data.map((work, index) => (
          <div className="mywork-card" key={index}>
            <img src={work.w_img} alt={work.w_name} />
            <div className="overlay">
              <a href={work.git_url} target="_blank" rel="noopener noreferrer">
                <button>GitHub</button>
              </a>
              <a href={work.live_url} target="_blank" rel="noopener noreferrer">
                <button>View Project</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className='mywork-showmore'>
        <p>Show More</p>
        <img src={arrow_icon} alt='' />
      </div>
    </div>
  );
};

export default MyWork;
