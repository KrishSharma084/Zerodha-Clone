import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container mt-5">
      <div className="row p-3 border-top text-muted">
        <h1 className="text-center mt-5">People</h1>
      </div>

      <div className="row p-5 mt-5">
        <div className="col-6 mt-4 text-center">
          <img
            src="/media/images/nithinKamath.jpg"
            alt="self image"
            style={{ borderRadius: "50%", width: "50%" }}
            className="mb-4"
          />
          <h4 className="mt-5 text-muted">Nithin Kamath</h4>
          <h6 className="text-muted">Founder, CEO</h6>
        </div>
        <div className="col-6 p-3 mt-4">
          <p
            className="text-muted"
            style={{ fontSize: "20px", lineHeight: "1.8" }}
          >
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p
            className="text-muted"
            style={{ fontSize: "20px", lineHeight: "1.8" }}
          >
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p
            className="text-muted"
            style={{ fontSize: "20px", lineHeight: "1.8" }}
          >
            {" "}
            Playing basketball is his zen.
          </p>

          <p
            className="text-muted"
            style={{ fontSize: "20px", lineHeight: "1.8" }}
          >
            Connect on
            <Link to="/" style={{ textDecoration: "none" }}>
              {" "}
              Homepage{" "}
            </Link>
            /
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              TradingQnA{" "}
            </a>
            /
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
