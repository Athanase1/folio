import React, {useEffect} from "react";
import "../../styles/portfolio.css"
import { Frontend, Backend, Autres } from "../../assets/data/data";
import Carousel from "../carousel/carousel";
import { HashLink } from 'react-router-hash-link';
export default function Profiles(){
    /*useEffect(() =>{
        const form = document.getElementById('contact-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  try {
    const response = await fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Message envoyé avec succès !');
      form.reset();
    } else {
      alert('Erreur lors de l’envoi. Veuillez réessayer.');
    }
  } catch (error) {
    alert('Erreur réseau : ' + error.message);
  }
});

    }, [])*/
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else{
                    entry.target.classList.remove("show");
                }
            });
        });

        // Sélectionne les éléments cachés une fois que le composant est monté
        const hiddenElements = document.querySelectorAll(".hidden");
        hiddenElements.forEach((el) => observer.observe(el));

        // Nettoie l'observateur lorsque le composant est démonté
        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []); // Le tableau vide signifie que cet effet ne sera exécuté qu'une seule fois après le montage

    return (
        <div className="portfolio">
           <aside>
                <ul>
                    <h1>Naviguer cette page</h1>
                    <li><HashLink smooth to="#section1">Section introduction</HashLink></li>
                    <li><HashLink smooth to="#section2">Projects récents</HashLink></li>
                    <li><HashLink smooth to="#section3">À propos de moi</HashLink></li>
                    <li><HashLink smooth to="#section4">Services offerts</HashLink></li>
                    <li><HashLink smooth to="#section5">Compétences</HashLink></li>
                    <li><HashLink smooth to="#section6">Contacts</HashLink></li>
                    </ul>
            </aside>
            <div className="portolioContent">
            <section className="hidden" id="section1">
                <div className="section-item" >
                    <h1 id="spc">Je suis Athanase,</h1>
                    <h3 >Développeur Web & Applications Mobiles Full Stack</h3>
                    <h4>Passionné par le code, je transforme vos idées en solutions numériques innovantes.</h4>
                </div>
            </section>
            <section className="hidden" id="section2">
                <h1>Projets récents</h1>
                <Carousel/>
            </section>
            <section className="hidden" id="section3">
                <div className="aprops">
                      <h1>À propos de moi</h1>
                      <p>Développeur full stack passionné par le développement d'applications web et mobiles. Solide maîtrise de technologies telles que React, React Native, Node.js, Html, JavaScript, Php, PostgreSQL, MySql et une expertise dans la création d'interfaces utilisateurs intuitives et performantes. Capable de gérer des projets de bout en bout, de la conception à la mise en production, avec une attention particulière à l'expérience utilisateur et aux bonnes pratiques de développement. En quête d'une nouvelle opportunité pour contribuer à des projets innovants dans une équipe dynamique.</p>
                </div>
            </section>
            <section className="hidden" id="section4">
                <h1>Services offerts</h1>
                <div className="service">
                    <ul>
                        <li>Développement de sites web réactifs.</li>
                        <li>Création d’applications mobiles.</li>
                        <li>Optimisation de bases de données.</li>
                        <li>Maintenance et amélioration de projets existants.</li>
                    </ul>
                </div>
            </section>
            <section className="hidden" id="section5">
                <h1>Compétences</h1>
                 <h2>front-End</h2>
               
                 <div className="card-container">
                    {Frontend.map((item) =>(
                      
                        <div className="card">
                          <img src={item.img} className="" alt="..." />
                            <h5 className="">{item.nom}</h5>
                        </div>
                    
                    ))}
                   </div>
                <h2>Back-End</h2>
                
                     <div class="card-container">
                    {Backend.map((item) =>(
                       
                        <div className="card">
                          <img src={item.img} className="" alt="..." />
                            <h5 className="">{item.nom}</h5>
                        </div>
                        
                    ))}
                </div>
                <h2>Autres</h2>
                <div class="card-container">
                    {Autres.map((item) =>(
                        
                        <div className="card">
                          <img src={item.img} className="" alt="..." />
                            <h5 className="">{item.nom}</h5>
                        </div>
                        
                    ))}
                </div>
            </section>
            <section className="hidden" id="section6">
                <div className="Contact" id="contact">
                    <h1>Contact</h1>
                    <form id="contact-form">
                        <label for="name">Nom :</label>
                        <input type="text" id="name" name="name" required />

                        <label for="email">Email :</label>
                        <input type="email" id="email" name="email" required />

                        <label for="message">Message :</label>
                        <textarea id="message" name="message" required></textarea>

                        <button id="submit" type="submit">Envoyer</button>
                    </form>
                </div>
            </section> 
            </div>
        </div>
    )
}