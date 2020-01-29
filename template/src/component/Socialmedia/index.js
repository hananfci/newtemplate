import React from 'react';
import axios from 'axios'
import { Socialmediasection , Social , Icon ,  Socialp , SocialSpan , SocialSpanInfo }  from './style.js'


  class Socialmedia extends React.Component {
  state = {
    socialList:[]
  }
  componentDidMount(){
    axios.get('js/data.json').then(result => { this.setState({socialList: result.data.social}) })
  }
  render(){
    const {socialList} = this.state;
  return (
  
    <div>
               <Socialmediasection>
                    {
                        socialList.map((socialitem) => (

                                      <Social item={socialitem.id} key={socialitem.id}>
                                      <Icon className={socialitem.icon}></Icon>
                                      <Socialp>
                                          <SocialSpan>{socialitem.title}</SocialSpan>
                                          <SocialSpanInfo>{socialitem.body}</SocialSpanInfo>
                                      </Socialp>
                                    </Social>

                                    ))
                    }
                  
                    
                </Socialmediasection>
    </div>
  )
}
}
export default Socialmedia;
