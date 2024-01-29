import './Slider.css'
import React from "react"
//import * as projectData from '../../data/projectsConst'

function Slider({projectData}) {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const getNext = () => {
    const newIndex = (currentSlideIndex + 1) % projectData.pictures.length;
    setCurrentSlideIndex(newIndex);
  };

  const getPrev = () => {
    const newIndex = (currentSlideIndex - 1 + projectData.pictures.length) % projectData.pictures.length;
    setCurrentSlideIndex(newIndex);
  };

  return (
    <div>
      <div className="slider__container">
              <div className="offers__container">
                <div className="offers__text-wrapper">

                  <img className="offers__pic" src={projectData.pictures.pic}></img>    
                  <img className="offers__pic" src={projectData.pictures.picsecond}></img> 
                  <img className="offers__pic" src={projectData.pictures.picthird}></img> 
                  <img className="offers__pic" src={projectData.pictures.picfourth}></img> 

                </div>  

              </div>

            </div>

      </div>
  );
}

export default Slider;