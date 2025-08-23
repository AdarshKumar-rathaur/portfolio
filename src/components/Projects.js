import React from "react";
import Project1 from "./images/Project1.webp";
import Project2 from "./images/Project2.webp";

export default function Projects() {
  return (
    <>
      <div className="heading">
        <h1 className="text-center my-2 underline">Featured Projects</h1>
      </div>
      <div className="container my-3 row">
        <div className="card my-3" style={{ width: "18rem" }}>
          <img src={Project1} className="card-img-top" alt="FINDMYGYM" />
          <div className="card-body">
            <h5 className="card-title underline">FINDMYGYM</h5>
            <p className="card-text">
              Find my gym is your go-to fitness discovery platform - helping you
              locate the best gyms near you based on distance.
            </p>
            <a href="https://findmygym.netlify.app/" className="btn btn-info">
              Checkout
            </a>
          </div>
        </div>
        <div className="card my-3" style={{ width: "18rem" }}>
          <img src={Project2} className="card-img-top" alt="Notes" />
          <div className="card-body">
            <h5 className="card-title underline">Notes</h5>
            <p className="card-text">
              A simple and intutive tool designed to help users quickly write,
              edit, and and organize their thoughts.
            </p>
            <a href="https://oursnote.netlify.app/" className="btn btn-info">
              Checkout
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
