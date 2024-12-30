import React, { useState, useEffect } from "react";
import "./carousel.css";
import img1 from "../../assets/img/app11.png"
import img2 from "../../assets/img/app12.png"
import img3 from "../../assets/img/app13.png"
import img4 from "../../assets/img/app21.png"
import img5 from "../../assets/img/app31.png"
import img6 from "../../assets/img/app32.png"
const images = [
    {
      src: img1,
      description: "Une petite application permettant de deduire les taxe payés selon le montant total.",
    },
    {
      src: img2,
      description: "Une petite application permettant de deduire les taxe payés selon le montant total.",
    },
    {
      src: img3,
      description: "Une petite application permettant de deduire les taxe payés selon le montant total.",
    },
    {
      src: img4,
      description: "Jeu de musique avec les touchs du clavier",
    },
    {
      src: img5,
      description: "Simon game",
    },
    {
      src:img6,
      description: "Simon game",
    },
  ];
  const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

useEffect(() => {
  if (isPaused) return;
  const interval = setInterval(nextSlide, 5000);
  return () => clearInterval(interval);
}, [isPaused]);

  
const nextSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
};

const prevSlide = () => {
  setCurrentIndex((prevIndex) =>
    (prevIndex - 1 + images.length) % images.length
  );
};
      // Défilement automatique
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change d'image toutes les secondes
    return () => clearInterval(interval); // Nettoie l'intervalle lorsque le composant est démonté
  }, []);
    return (
      <div
      className="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <i className="arrow prev bi bi-chevron-compact-left" onClick={prevSlide}></i>
      <div className="carousel-content" style={{ backgroundImage: `url(${images[currentIndex].src})` }}>
        <div
          className="legend"
          
        >
          <p className="description">{images[currentIndex].description}</p>
          
        </div>
      </div>
      <i className="arrow next bi bi-chevron-compact-right" onClick={nextSlide}></i>
    </div>
    );
  };
  
  export default Carousel;