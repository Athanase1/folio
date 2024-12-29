import React from "react";
import "../../styles/footer.css"
export default function Footer(){
    const anneecurrent = new Date().getFullYear()
    return (
        <footer>
           <p>&copy; Athanase Kpan {anneecurrent} tout droit réservé</p>
           <div className="socials">
           <a href="https://www.linkedin.com/in/athan-roi-0a77852b1/"><i className="bi bi-linkedin"></i></a>
           <a href="https://www.facebook.com/Jesus.love.you.forever.bro.sis?mibextid=LQQJ4d"><i className="bi bi-facebook"></i></a>
           <a href="https://www.instagram.com/a.thanos_?igsh=MTRuaGQzZTBvMmVyeg%3D%3D&utm_source=qr"><i className="bi bi-instagram"></i></a>
           </div>
        </footer>
    )
}