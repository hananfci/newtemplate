import React , {useState, useEffect} from 'react';
import axios from 'axios'
import { Portfoliotitle , Portfoliosection , Span  ,  Portfoliolist , Portfolioitem , Boxdiv  , Boxdivimg , Overlay, Overlayspan }  from './style.js'
const Protfolio= () => {
  
  const [ Images , setImages] = useState([]);
  useEffect(() => {
    
    axios.get('js/data.json').then(result => { setImages(result.data.portfolio)})
  },[]);

  return (
    <div>
       <Portfoliosection>
            <Portfoliotitle><Span>My</Span> Portfolio</Portfoliotitle>
            <Portfoliolist>
                <Portfolioitem active >All</Portfolioitem>
                <Portfolioitem>HTML</Portfolioitem>
                <Portfolioitem>Photoshop</Portfolioitem>
                <Portfolioitem>Wordpress</Portfolioitem>
                <Portfolioitem>Mobile</Portfolioitem>
            </Portfoliolist>
            
            <div className="box">{
            Images.map((image) =>(
              <Boxdiv key={image.id}>
              <Boxdivimg src={image.image} alt=""/>
              <Overlay>
                  <Overlayspan>
                      Show Image
                  </Overlayspan>
              </Overlay>
              </Boxdiv>
            )) 
               
          }    
               
                
            </div>
            
        </Portfoliosection>
    </div>
  )
}

export default Protfolio;
