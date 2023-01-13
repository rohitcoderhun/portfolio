import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const [emailId,setEmailId]=useState("");
  const [fromName,setFromName]=useState("");
  const [message,setMessage]=useState("");
  const darkMode = theme.state.darkMode;
 
  const [done, setDone] = useState(false);

  const templateParams={
    from_name:fromName,
    to_name:"Rohit",
    message:message+emailId,
    reply_to:emailId
  }
  const sendEmail = (e) => {
    e.preventDefault();

    if(emailId!=="" && fromName!=="" && message!==""){
      emailjs.send("service_69to88r","template_542ia92", templateParams,"gBH0giwPzv-LYH2PN")
      // .then(function(response) {
      //    console.log('SUCCESS!', response.status, response.text);
      //    alert("Email sent successfully")
      //    setDone(true)
      // }, function(err) {
      //    console.log('FAILED...', err);
      // });
      setEmailId("");
      setMessage("");
      setFromName("");
    }else{
      alert("please enter all feilds")
    }
    
  };

  const handlechange=(e)=>{
    if(e.target.name==="user_email"){
      setEmailId(e.target.value);
    }
    else if(e.target.name==="user_name"){
      setFromName(e.target.value);
    }
    else{
      setMessage(e.target.value);
    }
  }

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" value={fromName}  placeholder="Name" onChange={handlechange} />
          <input type="email" name="user_email" className="user" value={emailId} placeholder="Email" onChange={handlechange}/>
          <textarea name="user_msg" className="user" placeholder="Message" value={message} onChange={handlechange}/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;