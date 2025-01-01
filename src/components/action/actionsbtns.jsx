import React from "react"
import "./actionbtns.css"
export default function ActionBtns({txt1, txt2}){
   return(
        <div className="btns">
            <button>{txt1}</button>
            <button>{txt2}</button>
        </div>
   )
}