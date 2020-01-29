import React from 'react';
import { Homesection , Homesectioninfo , Hometitle , Homeinfo , Homedesc , Span , Homebtn}  from './style.js'
const Home= () => {
  return (
  
    <Homesection>
            <div className="container">
                <Homesectioninfo>
                    <Hometitle>Hamza Nabil</Hometitle>
                    <Homeinfo>Creative Director</Homeinfo>
                    <Homedesc>
                        Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </Homedesc>
                    <Homebtn>Let's Begin</Homebtn>
                </Homesectioninfo>
            </div>
        </Homesection>

  )
}

export default Home;
