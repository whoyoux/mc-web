import React from "react";
import "../App.css";

const Carousel = props => (
  <header>
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active imgC1">
          <div className="carousel-caption d-none d-md-block">
            <h2 className="display-4">Dobra administracja</h2>
            <p className="lead">Zawsze pomoże, zawsze najlepsza.</p>
          </div>
        </div>

        <div className="carousel-item imgC2">
          <div className="carousel-caption d-none d-md-block">
            <h2 className="display-4">Własne pluginy</h2>
            <p className="lead">Sami je napisaliśmy i sprawdziliśmy.</p>
          </div>
        </div>

        <div className="carousel-item imgC3">
          <div className="carousel-caption d-none d-md-block">
            <h2 className="display-4">Mili gracze</h2>
            <p className="lead">Nasi gracze są jednymi z najlepszych!</p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </header>
);

export default Carousel;
