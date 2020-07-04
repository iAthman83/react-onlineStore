import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="about"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
              cumque delectus non, quasi ducimus alias iste libero ab deleniti
              ullam.
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
              cumque delectus non, quasi ducimus alias iste libero ab deleniti
              ullam.
            </p>
            <button
              style={{ marginTop: "2rem" }}
              className="main-link"
              type="button"
            >
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
