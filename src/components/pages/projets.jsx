import React from "react";
import "../../styles/projects.css"
import Carousel from "../carousel/carousel";
import { Project } from "../../assets/data/data";
import ActionBtns from "../action/actionsbtns";
import Emo from "../../assets/img/emoji.jpg"
import Pcard from "../projets/pcard";

export default function Projects(){
   
    return (
        <div className="Projets-container">
          <div className="section1">
            <div className="sous-sec1">
              <img src={Emo} alt="Moi" />
              <ActionBtns txt1="Tu veux un site?" txt2="M'embaucher?"/>
            </div>
            <div className="sous-sec2">
              <h1>Gallerie de projects récents</h1>
              <Carousel/>
            </div>
          </div>
         <h1>Projet récents</h1>
          <div className="projects">
            {Project.map((item) =>(
            <Pcard src={item.src} titre={item.titre} desc={item.desc} link={item.link} day={item.date}/>
            ))}
            </div> 
        </div>
    )
}