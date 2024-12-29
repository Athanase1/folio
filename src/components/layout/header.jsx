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
                    >
                        Projets
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            `link ${isActive ? "active" : "inactive"}`
                        }
                        onClick={Onclick}
                        to="/profile"
                    >
                        Portfolio
                    </NavLink>
                </li>
            </ul>
        </header>
    );
}
