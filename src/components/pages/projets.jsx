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
              <a href={item.link}>
              <div class="card" style={{width: "18rem"}} key={item.id}>
              <img src={item.src} class="card-img-top img" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{item.titre}</h5>
                <p class="card-text">{item.desc}</p>
                <a href={item.link} class="btn btn-primary">Visiter le site<i class="bi bi-box-arrow-up-right"></i></a>
              </div>
            </div>
            </a>
            ))}
            </div> 
        </div>
    )
}