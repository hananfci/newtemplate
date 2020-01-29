import React from 'react';
import axios from 'axios'
import { Profileskills , Profile , Profilelist , Profileitem  , Profileitemspan , Profileitemspanweb  , Skillsection ,Skillsdesc , Skillsbar , Barspantitle, Barspanperc , Barsparent , Barsparentspan , Profileskillstitle , Profileskillsspantitle  }  from './style.js'

class Porfile extends React.Component{
  state ={
    skills:[]
  }
  componentDidMount(){
   axios.get('js/data.json').then(result => { this.setState({skills: result.data.skills}) })
 }
render(){
  const {skills} = this.state;
  return (
    <div >
     <Profileskills>
            <div className="container">
                <Profile>
                    <Profileskillstitle><Profileskillsspantitle>My </Profileskillsspantitle>Profile</Profileskillstitle>
                    <Profilelist>
                    <Profileitem>
                            <Profileitemspan>Name</Profileitemspan>
                            Hamza Nabil
                        </Profileitem>
                        <Profileitem>
                            <Profileitemspan>Birthday</Profileitemspan>
                            21/1/1996
                       </Profileitem>
                       <Profileitem>
                            <Profileitemspan>Address</Profileitemspan>
                            Ain shams
                       </Profileitem>
                       <Profileitem>
                            <Profileitemspan>Phone</Profileitemspan>
                            4444 5555 6666
                       </Profileitem>
                       <Profileitem>
                            <Profileitemspan>Email</Profileitemspan>
                            hamza@hamza.com
                       </Profileitem>
                       <Profileitem>
                            <Profileitemspan>Website</Profileitemspan>
                            <Profileitemspanweb>www.google.com/</Profileitemspanweb>
                       </Profileitem>
                    </Profilelist>
                </Profile>
                
                <Skillsection>
                <Profileskillstitle><Profileskillsspantitle>Some </Profileskillsspantitle>skills</Profileskillstitle>
                  
                    <Skillsdesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </Skillsdesc>
                   {
                     skills.map((skill) => (
                      <Skillsbar key={skill.id}>
                      <Barspantitle>{skill.title}</Barspantitle>
                      <Barspanperc>{skill.perc}</Barspanperc>
                      <Barsparent>
                          <Barsparentspan sp={skill.perc}></Barsparentspan>
                      </Barsparent>
                  </Skillsbar>
                     ))
                   }
                   
                    
                </Skillsection> 
                
            </div>
        </Profileskills>
        
    </div>
  )
  }
}

export default Porfile;
