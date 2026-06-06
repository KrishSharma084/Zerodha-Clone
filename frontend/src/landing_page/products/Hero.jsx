import React from "react";

function Hero() {
  return (
    <div className="container mt-5 border-bottom mb-5">
      <div className="row text-center p-5">
        <h1 className="text-muted">Technology</h1>
        <h3 className="mt-3 text-muted fs-4" >Sleek, modern, and intuitive trading platforms</h3>
        <p className="mt-3 pb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
