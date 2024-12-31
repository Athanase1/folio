import React from "react";
import { NavLink } from "react-router-dom";

export default function Header({ Onclick, isShow }) {
    return (
        <header>
            <i
                className={`bi ${!isShow ? "bi-list" : "bi-x"}`}
                onClick={Onclick}
            ></i>
            <ul className={`UL ${isShow ? "show" : ""}`}>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            `link ${isActive ? "active" : "inactive"}`
                        }
                        onClick={Onclick}
                        to="/"
                    >
                        <i className="bi bi-house-door"></i>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            `link ${isActive ? "active" : "inactive"}`
                        }
                        onClick={Onclick}
                        to="/projets"
                    >   <i className="bi bi-cast"></i>
                        Projets
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            `link ${isActive ? "active" : "inactive"}`
                        }
                        onClick={Onclick}
                        to="/portfolio"
                    >   <i className="bi bi-briefcase"></i>
                        Portfolio
                    </NavLink>
                </li>
            </ul>
        </header>
    );
}
