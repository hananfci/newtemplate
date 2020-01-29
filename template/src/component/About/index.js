import React from 'react';
import { Creativesection , Creativeinfo , Infotitle ,  Infotitlespan , Infodir ,  Infodesc , Infodescanchor  }  from './style.js'

const About= () => {
  return (
    <div >
     <Creativesection>
            <div class="container">
                <Creativeinfo>
                    <Infotitle><Infotitlespan>This is</Infotitlespan> Me</Infotitle>
                    <Infodir>Creative Director</Infodir>
                    <Infodesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a href="#">explicabo</a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Infodesc>
                    <Infodesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </Infodesc>
                </Creativeinfo>
            </div>
        </Creativesection>
    </div>
  )
}

export default About;
