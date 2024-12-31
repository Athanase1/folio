import React, {useEffect, useState,useRef} from "react";
import "../../styles/portfolio.css"
import Me from "../../assets/img/Moi1.jpg"
import { Frontend, Backend, Autres } from "../../assets/data/data";
import Carousel from "../carousel/carousel";
import { HashLink } from 'react-router-hash-link';
const Competences = [Frontend, Backend, Autres]
export default function Profiles(){
    const [index, setIndex] = useState(0)
    const data = Competences[index]
    function handleClick(e){
        let value = e.target.value
        setIndex(parseInt(value))
    }
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
    const portfolioRef = useRef(null);

    useEffect(() => {
        const startScrolling = () => {
          const { scrollLeft, scrollWidth, clientWidth } = portfolioRef.current;
    
          // Si le bord droit est atteint, attend 2 secondes avant de recommencer
          if (scrollLeft + clientWidth >= scrollWidth) {
            setTimeout(() => {
              portfolioRef.current.scrollLeft = 0; // Revient au début
            }, 2000); // Pause de 2 secondes
          } else {
            // Continue de défiler vers la droite
            portfolioRef.current.scrollBy({
              left: 5, // Ajuste cette valeur pour la vitesse
              behavior: "smooth",
            });
          }
        };
    
        // Démarrage automatique du défilement
        const scrollInterval = setInterval(startScrolling, 30); // Définit la vitesse du défilement
    
        return () => clearInterval(scrollInterval); // Nettoie l'intervalle lors du démontage
      }, []);
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
            <div className="portfolioContent">
            <section className="hidden" id="section1">
                <img src={Me} alt="moi" />
                <div className="section-item" >
                    <h1 id="spc">Je suis Athanase,</h1>
                    <h3 >Développeur Web & Applications Mobiles Full Stack</h3>
                    <h4 className="fw-light">Passionné par le code, je transforme vos idées en solutions numériques innovantes.</h4>
                </div>
            </section>
            <section className="hidden" id="section2">
                <h1>Projets récents</h1>
                <div className="carou">
                <Carousel/>
                </div>
            </section>
            <section className="hidden" id="section3">
                <div className="aprops">
                      <h1>À propos de moi</h1>
                      <p className="fw-lighter">Développeur full stack passionné par le développement d'applications web et mobiles. Solide maîtrise de technologies telles que React, React Native, Node.js, Html, JavaScript, Php, PostgreSQL, MySql et une expertise dans la création d'interfaces utilisateurs intuitives et performantes. Capable de gérer des projets de bout en bout, de la conception à la mise en production, avec une attention particulière à l'expérience utilisateur et aux bonnes pratiques de développement. En quête d'une nouvelle opportunité pour contribuer à des projets innovants dans une équipe dynamique.</p>
                </div>
            </section>
            <section className="hidden" id="section4">
                <h1>Services offerts</h1>
                <div className="service">
                    <ul>
                        <li><i className="bi bi-globe"></i>Développement de sites web réactifs.</li>
                        <li><i className="bi bi-app"></i>Création d’applications mobiles.</li>
                        <li><i className="bi bi-database-fill-check"></i>Optimisation de bases de données.</li>
                        <li><i className="bi bi-cast"></i>Maintenance et amélioration de projets existants.</li>
                    </ul>
                </div>
            </section>
            <section className="hidden" id="section5">
                 <h1>Competences</h1>
                 
                 <div className="filter">
                    <ul>
                        <li><button type="radio" value={0} onClick={handleClick}>Front-End</button></li>
                        <li><button type="radio" value={1} onClick={handleClick}>Back-End</button></li>
                        <li><button type="radio" value={2} onClick={handleClick}>Autres</button></li>
                    </ul>
                 </div>
                 <div className="card-container"
                  ref={portfolioRef}
                  style={{ whiteSpace: "nowrap" }}
                 >
                    {data.map((item) =>(
                        <div className="com" key={item.id}>
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
                        <label htmlFor="name">Nom :</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email :</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Message :</label>
                        <textarea id="message" name="message" required></textarea>

                        <button id="submit" type="submit">Envoyer</button>
                    </form>
                </div>
            </section> 
            </div>
        </div>
    )
}