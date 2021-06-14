import React from "react";
import Image1 from "../img/1.png";
import Image2 from "../img/3.png";
import Image3 from "../img/10.png";
const Home = () => {
  return (
    <div>
      <header class="container-fluid">
        <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
              <img src={Image1} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <img src={Image2} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <img src={Image3} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Home;
