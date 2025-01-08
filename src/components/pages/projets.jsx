import React, { useState, useEffect } from "react";
import "../../styles/projects.css"
//import Carousel from "../carousel/carousel";
import { Project } from "../../assets/data/data";
//import ActionBtns from "../action/actionsbtns";
//import Emo from "../../assets/img/emoji.jpg"
//import Pcard from "../projets/pcard";

export default function Projects(){
  const [indexcourant, setIndexCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);
  const nextSlide = () => {
    setIndexCurrent((prevIndex) => (prevIndex + 1) % Project.length);
  };
  const prevSlide = () => {
    setIndexCurrent((prevIndex) =>
      (prevIndex - 1 + Project.length) % Project.length
    );
  };
        // Défilement automatique
    useEffect(() => {
      const interval = setInterval(nextSlide, 5000); // Change d'image toutes les secondes
      return () => clearInterval(interval); // Nettoie l'intervalle lorsque le composant est démonté
    }, []);
    return (
        <div className="Projets-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        >
          <div className="carou-container">
            
           <i className="arrow prev  bi-chevron-compact-left" onClick={prevSlide}></i>
          <img src={Project[indexcourant].src} alt={Project[indexcourant].titre} />
          <p className="description">{Project[indexcourant].titre}</p>
          <i className="arrow next  bi-chevron-compact-right" onClick={nextSlide}></i>
          </div>
        </div>
    )
}