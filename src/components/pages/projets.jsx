import React from "react";
import "../../styles/projects.css"
//import Carousel from "../carousel/carousel";
import { Project } from "../../assets/data/data";
import ActionBtns from "../action/actionsbtns";
import Emo from "../../assets/img/emoji.jpg"
import Pcard from "../projets/pcard";

export default function Projects(){
  const mostRecentProject = Project.reduce((latestProject, currentProject) => {
    const latestDate = new Date(latestProject.date.split("-").reverse().join("-"));
    const currentDate = new Date(currentProject.date.split("-").reverse().join("-"));
    return currentDate > latestDate ? currentProject : latestProject;
}, Project[0]);
    return (
        <div className="Projets-container">
          <div className="section1">
            <div className="sous-sec1">
              <img src={Emo} alt="Moi" />
              <ActionBtns txt1="Tu veux un site?" txt2="M'embaucher?"/>
            </div>
            <div className="sous-sec2">
              <h1>Projets le plus récent</h1>
              <Pcard src={mostRecentProject.src} titre={mostRecentProject.titre} desc={mostRecentProject.desc} day={mostRecentProject.date} link={mostRecentProject.link}/>
            </div>
          </div>
         <h1>Projets récents</h1>
          <div className="projects">
            {Project.map((item) =>(
            <Pcard src={item.src} titre={item.titre} desc={item.desc} link={item.link} day={item.date}/>
            ))}
            </div> 
        </div>
    )
}