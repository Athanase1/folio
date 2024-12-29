import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import "./layout.css"

export default function LayOut(){
    const [showHeader, setShowHeader] = useState(false)
    function headerHandler(){
        return setShowHeader(!showHeader)
    }
    return(
        <div className="layout">
        <Header Onclick={headerHandler} isShow={showHeader}/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </div>
    )
}