import React from "react";
import "../../styles/projects.css"
import Carousel from "../carousel/carousel";
import { Project } from "../../assets/data/data";

export default function Projects(){
   
    return (
        <div>
          <Carousel/>
         <h1>Projet récents</h1>
          <div className="projects">
            {Project.map((item) =>(
            
              <div className="card" style={{width: "18rem"}} key={item.id}>
              <img src={item.src} className="card-img-top img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.titre}</h5>
                <p className="card-text">{item.desc}</p>
                <a href={item.link} className="btn btn-primary">Visiter le site<i className="bi bi-box-arrow-up-right"></i></a>
              </div>
            </div>
           
            ))}
            </div> 
        </div>
    )
}