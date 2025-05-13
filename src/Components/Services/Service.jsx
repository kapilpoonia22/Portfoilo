import React from 'react'
import './Service.css';
import theme_pattern from '../../Assets/theme_pattern.svg';
import Services_Data from './../../Assets/services_data';
import arrow_icon from '../../Assets/arrow_icon.svg';

const Service = () => {
  return (
    <div id='services' className='services'>
      <div className='services-title'>
       <h1>My Services</h1>
       <img src={theme_pattern} alt=''/>
      </div>
      <div className='services-container'>
         {Services_Data.map((Service,index)=>{
            return <div key={index} className='services-format'>
                <h3>{Service.s_no}</h3>
                <h2>{Service.s_name}</h2>
                <p>{Service.s_desc}</p>
                <div className='services_readmore'>
                    <p>Read More</p>
                    <img src={arrow_icon} alt=''/>
                </div>
            </div>
         })}
      </div>
    </div>
  )
}

export default Service
