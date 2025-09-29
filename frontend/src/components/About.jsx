import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we never compromise on is taste.</p>
            </div>
            <p className="mid">
              At Urban Bites, we believe food should be more than just a meal—it should be an experience. With fresh ingredients, mouth-watering recipes, and easy reservations, we bring you the perfect blend of taste and comfort.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.jpg" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;