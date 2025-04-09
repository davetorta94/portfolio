import React from "react";
import { Link } from 'react-router-dom';


export const ContactNavbar = ({handleLanguage, spanish}) => {

  return (
    <>

<nav className="navbar navbar-expand-lg navbar-light bg-navbar fixed-top">
      <div className="container-fluid">
        {/* Branding */}
        <Link to="/" className="navbar-brand text-white">
            Portfolio David Torta Olah
        </Link>

        {/* Responsive Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 justify-content-end">
            {/* Language Toggle Button */}
            <li className="nav-item">
          { spanish ?
              <button className="btn btn-primary mt-1" onClick={handleLanguage}>
                ENG
              </button>
              : 
              <button className="btn btn-primary mt-1" onClick={handleLanguage}>
                ESP
              </button>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>


    </>
  )
}