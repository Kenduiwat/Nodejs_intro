import React, { useContext, useRef, useState } from "react";
import "./contact.css"
import Phone from "../../images/phone.jpg"
import Email from "../../images/email.png"
import Address from "../../images/address.png"
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";




function Contact() {


    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;


    const formRef = useRef()
    const [done, setDone] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bozwykv', 'template_jg8d63o', formRef.current, 'user_Fs2apvCwcR5VreHjyYaV6')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }


    return (
        <div className="contact">
           <div className="contact-bg"></div> 
           <div className="contact-wrapper">
               <div className="contact-left">
                   <h1 className="contact-title">Lets discuss your project</h1>
                   <div className="contact-info">
                       <div className="contact-info-item">
                           <img src={Phone} alt="" className="contact-icon" />
                           +234 9136700952
                       </div>
                       <div className="contact-info-item">
                           <img src={Email} alt="" className="contact-icon" />
                           Brandonarmand96@gmail.com
                           
                       </div>
                       <div className="contact-info-item">
                           <img src={Address} alt="" className="contact-icon" />
                           Ahmadu Bello University, Zaria, Kaduna, Nigeria
                       </div>
                   </div>
               </div>
               <div className="contact-right">
                   <p className="contact-desc">
                       <b>What's your story?</b> Get in touch. Always available for freelancing if the right project comes along.
                   </p>
                   <form ref={formRef} onSubmit={handleSubmit}>
                       <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                       <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                       <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                       <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                       <button>Submit</button>
                        {done && "Thank you..."}
                   </form>
               </div>
           </div>
        </div>
    )
}

export default Contact;
