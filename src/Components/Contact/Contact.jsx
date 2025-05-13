import React from 'react';
import './Contact.css';
import theme_pattren from '../../Assets/theme_pattern.svg';
import mail_icon from '../../Assets/mail_icon.svg';
import loction_icon from '../../Assets/location_icon.svg';
import call_icon from '../../Assets/call_icon.svg';

const Contact = () => {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ea5304a0-4a26-48a9-9b9a-cbb7c391cc6f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get In Touch</h1>
        <img src={theme_pattren} alt=''/>

      </div>
      <div className='contact-section'>
        <div className='contact-left'>
            <h1>Let's talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime</p>
            <div className='contact-details'>
                <div className='contact-detail'>
                   <img src={mail_icon} alt=''/> <p>Pooniakapil59@gmail.com</p>
                </div>
                <div className='contact-detail'>
                <img src={call_icon} alt=''/> <p>+91 63761-09957</p>
                 </div>
                <div className='contact-detail'>
                <img src={loction_icon} alt=''/> <p>Punjab</p>
              </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type='text' placeholder='enter your name' name='name'></input>
            <label htmlFor="">Your Email</label>
            <input type="text" placeholder='enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows='8' placeholder='enter your message'></textarea>
            <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
