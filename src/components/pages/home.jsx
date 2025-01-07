import React from "react";
import "../../styles/index.css"
import { HashLink } from 'react-router-hash-link';
import Social from "../socialMedia/Social";
import ActionBtns from "../action/actionsbtns";
export default function Home(){
 
    return (
        <div className="Home">
            <div className="desc">
                    <div className="moi">
                        <h1>Je suis Athanase,</h1>
                        <h3 className="animated-text">Développeur Web & Applications Mobiles Full Stack</h3>
                         <ActionBtns txt1="Créer un site" txt2="M'embaucher"/>   
                    </div>
                    <div className="about">
                        <h1>À propos de moi</h1>
                        <p>Développeur full stack passionné par le développement d'applications web et mobiles. Solide maîtrise de technologies telles que React, React Native, Node.js, PostgreSQL, et une expertise dans la création d'interfaces utilisateurs intuitives et performantes. Capable de gérer des projets de bout en bout, de la conception à la mise en production, avec une attention particulière à l'expérience utilisateur et aux bonnes pratiques de développement. En quête d'une nouvelle opportunité pour contribuer à des projets innovants dans une équipe dynamique.</p>
                        <div className="liens">
                            <HashLink to="/portfolio#section">Savoir Plus</HashLink>
                            
                        </div>
                        
                    </div>        
            </div>
            <div className="photo">
            <Social/>
            </div>
        </div>
    )
}