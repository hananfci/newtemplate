import React from 'react';
import Footer from './../Footer' 
import { Dropsection , Droptitle , Droptitlespan ,  Dropform , Dropinput , FormInput, Dropinputtext , Dropinputemail , Dropinputsub , Droptextarea , Dropinputsubmit  }  from './style.js'
const Contact = () => {
  return (
    <React.Fragment>
     <Dropsection>
            <div className="container">
                <Droptitle><Droptitlespan>Drop </Droptitlespan>Me A line</Droptitle>
                <Dropform action="">
                    <FormInput>
                        <Dropinputtext type="text" placeholder="Your Name" />
                        <Dropinputemail type="email" placeholder="Your Email"/>
                    </FormInput>
                    <Dropinputsub type="text" className="sub" placeholder="Your Subject"/>
                    <Droptextarea cols="30" rows="10" placeholder="Your Message"></Droptextarea>
                    <Dropinputsubmit type="submit" value="Send Message"/>
                </Dropform>
            </div>
        </Dropsection>
        <Footer/>
    </React.Fragment>
  )
}

export default Contact;
