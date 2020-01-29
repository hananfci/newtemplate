import React  from 'react'
import axios from 'axios'
import { Worksection , WorkTilte , Span , Part  , Icon ,  PartTitle ,Line , PartDesc}  from './style.js'
class Work extends React.Component{
  state ={
    works :[]
  }
  componentDidMount(){
    axios.get('js/data.json').then(result => { this.setState({works: result.data.works}) })
  }
  render(){
const {works} = this.state;
 
    return (
   
        <div>
           <Worksection>
                 <div className="container">
                     <WorkTilte><Span>My</Span> Work</WorkTilte>{
                   works.map((work) => (
                     <Part first={work.id} key={work.id}>
                         <Icon className={work.icon_name}></Icon>
                         <PartTitle>{work.title}</PartTitle>
                         <Line/>
                         <PartDesc>
                                {work.body}                       
                          </PartDesc>
                     </Part>
                
                     ))}
                   
                  
                 </div>
             </Worksection>
         </div>
    
     )
    
  }
 
}

export default Work;
