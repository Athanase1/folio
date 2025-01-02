import "./pcard.css"
export default function Pcard(props){
    return(
        <div className="carte">
        <img src={props.src} className="card-img-top img" alt={props.desc} />
        <div className="card-corps">
          <h5 className="card-titre">{props.titre}</h5>
          <p className="card-texte">{props.desc}</p>
          <div className="details">
            <h6>Terminé le {props.day}</h6>
            <a href={props.link} className="btn btn-primary"><i className="bi bi-box-arrow-up-right"></i></a>
          </div>
        </div>
      </div>
    )
}