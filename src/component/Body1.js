import React, { Component } from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import download from '../images/download.jpg'
import download1 from '../images/download1.jpg'
import download2 from '../images/download2.jpg'
export class Body1 extends Component {
    render() {
        const slideImages = [
            `${download}`,
            `${download1}`,
            `${download2}`
          ];
        return (
            <div className="body1">
          
            <div className="container-flude  ">
               <div className="row ">
                   <div className="col-12 ">
                   <div className="slide1">
                  
                   <h4 className="announce">ANNOUNCEMENTS</h4>
                   
                   <Slide easing="ease" className="imgslid">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              
            </div>
          </div>
        </Slide>
        </div>
                  
                   </div>
               </div>
            </div>
            </div>
        )
    }
}
                     {/* <img src={download} /> 
                     <img src={download1} /> 
                     <img src={download2} />  */}

export default Body1
