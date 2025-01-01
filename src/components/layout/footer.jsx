import React from "react";
import "../../styles/footer.css"
import Social from "../socialMedia/Social";
export default function Footer(){
    const anneecurrent = new Date().getFullYear()
    return (
        <footer>
           <p>&copy; Athanase Kpan {anneecurrent} tout droit réservé</p>
          <Social/>
        </footer>
    )
}