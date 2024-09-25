import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "ccf8d2be-fc08-400a-8058-3b7296e05132");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          alert("Form Submitted Successfully")
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />  
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects,so feel free.you can contact me anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>laiel.hajji@ensi-uma.tn</p>
                    </div>
                    <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    <p>+216 23160035</p>
                    </div>
                    <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>Tunisia</p>
                    </div>
                    <div className="contact-detail">
                    <img src={linkedin} alt="LinkedIn" style={{width: "33px", height: "34px"}} />
                    <a href="https://www.linkedin.com/in/layel-hajji/" target="_blank" rel="noopener noreferrer" style={{cursor: 'pointer',color:'white'}}>
                        https://www.linkedin.com/in/layel-hajji/
                    </a>
                    </div>
                    <div className="contact-detail">
                    <img src={github} alt="LinkedIn" style={{width: "33px", height: "34px"}} />
                    <a href="https://github.com/layelhajji" target="_blank" rel="noopener noreferrer" style={{cursor: 'pointer',color:'white'}}>
                    https://github.com/layelhajji
                    </a>
                    </div>

                   
                    
                </div>
            </div>
            <form  onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text"  placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email"  placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea  rows="8"  name='message' placeholder='Enter your message'/>
                <button type="submit" className="contact-submit">Submit now</button>





            </form>
        </div>
      
    </div>
  )
}

export default Contact
