import React from "react";

const Header = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
    <div className="container">
      <a className="navbar-brand" href="">
        <strong>ServerMC</strong>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Strona główna
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              O nas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Poradniki
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Bany
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Kontakt
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sklep
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
