import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className="navbar navbar-light">
            <Link className="navbar-brand" to="/">TP Tracker</Link>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarsExample01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/index">View Toilet Paper</NavLink>
                    </li>
                </ul>
                <form className="form-inline my-2 my-md-0">
                <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;