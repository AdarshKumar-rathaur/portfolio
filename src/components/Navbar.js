import React from 'react'
import { Link } from "react-router";
import logo from "./images/logo.png";

export default function Navbar(props) {
    return (
        <header>
            <nav className="navbar bg-primary navbar-expand">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} className="logo" alt={props.title} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"><i className="fa-solid fa-house"></i>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about"><i className="fa-solid fa-address-card"></i>About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-list-check"></i>Projects
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/notes"><i className="fa-solid fa-notes"></i>Notes</Link></li>
                                    <li><Link className="dropdown-item" to="/">Adding Soon</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Adding Soon</Link></li>
                                </ul>
                            </li>
                        </ul>
                        {props.searchbar ? <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> : ""}
                    </div>
                </div>
            </nav>
        </header>
    )
}
