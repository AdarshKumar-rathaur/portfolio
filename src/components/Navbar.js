import React from 'react'
import { Link } from "react-router";

export default function Navbar(props) {
    return (
        <>
            <nav  className="navbar bg-primary navbar-expand" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Projects
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/notes">Notes</Link></li>
                                    <li><Link className="dropdown-item" to="/">Adding Soon</Link></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><Link className="dropdown-item" to="/">Adding Soon</Link></li>
                                </ul>
                            </li>
                        </ul>
                        {props.searchbar ?<form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> : ""}
                    </div>
                </div>
            </nav>
        </>
    )
}
