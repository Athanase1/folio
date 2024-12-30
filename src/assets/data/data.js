
/* mes image*/
import Java from "../img/java.png";
import Junit from "../img/junit.png";
import Node from "../img/node.png";
import Reactjs from "../img/React.png";
import Html from "../img/html.png"
import Css from "../img/css.webp";
import Jquery from "../img/jquery.jpg";
import Js from "../img/js.png";
import VS from "../img/visualstudio.jpg";
import Intelij from "../img/intellij.jpg";
import Webstorm from "../img/webstorm.png";
import Mysql from "../img/mysql.png";
import Php from "../img/php.jpg";
import Plsql from "../img/plsql.jpg";
import Postgre from "../img/postgress.webp";
import App1 from "../img/app11.png";
import App2 from "../img/app21.png";
import App3 from "../img/app31.png"
import App4 from "../img/port.png";

export const Backend = [
    {
        id:0,
        nom:"Java",
        img:Java,
    },
    {
        id:2,
        nom:"Php",
        img:Php,
    },
    {
        id:2,
        nom:"Node Js",
        img:Node,
    },
    {
        id:3,
        nom:"Junit",
        img:Junit,
    },
]
export const Frontend = [
    {
        id:0,
        nom:"Html",
        img:Html,
    },
    {
        id:1,
        nom:"Css",
        img:Css,
    },
    {
        id:2,
        nom:"JavaScript",
        img:Js,
    },
    {
        id:3,
        nom:"React",
        img:Reactjs,
    },
    {
        id:4,
        nom:"Jquery",
        img:Jquery,
    },

]
export const BD = [
    {
        id:0,
        nom:"Mysql",
        img:Mysql,
    },
    {
        id:1,
        nom:"PostgreSql",
        img:Postgre,
    },
    {
        id:2,
        nom:"PL/Sql",
        img:Plsql,
    },
]
export const Autres = [
    {
        id:0,
        nom:"Intellij",
        img:Intelij,
    },
    {
        id:1,
        nom:"Visual Studio Code",
        img:VS,
    },
    {
        id:2,
        nom:"WebStorm",
        img:Webstorm,
    },
]

export const Project = [
    
    {
        id:0,
        src:App1,
        titre:"Calculer inverse Taxe",
        desc:"Une petite application qui calcule les taxe selon le montant hors taxe fourni par l'utilisateur. L'interface est generée grace à la manipulation du Dom avec le Js.",
        link:"https://athanase1.github.io/calculerTaxe/"
    },
    {
        id:1,
        src:App2,
        titre:"Drum Kit",
        desc:"Une application qui permet de jouer de les musique à l'aide du clavier.",
        link:"https://athanase1.github.io/drum/"
    },
    {
        id:2,
        src:App3,
        titre:"Simon Game",
        desc:"Une application de jeu.",
        link:"https://athanase1.github.io/game/"
    },
    {
        id:3,
        src:App4,
        titre:"Mon portfolio",
        desc:"Un site web crée dans le but de démontrer mes compétences à mes futures employeurs.",
        link:"https://athanase1.github.io/folio/"
    }
]

