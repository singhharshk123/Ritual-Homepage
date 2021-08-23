import React, { Fragment } from "react";
import "./Home.css";
// import firstHome from "./images/home.jpg";
// import Products from "./Products";


function Home() {
  return (
    <div>
      <Fragment>
        <div className="container" style={{marginLeft:"20px"}}>
          <div className="containerText">
            <h1>
              <div className="firstLine">The future</div>
              <div className="secondLine"> of health</div>
              <div className="thirdLine">
                <em>— is clear.</em>
              </div>
            </h1>
            <div className="shopEnv">
              <div className="shop">
                <a title="Shop All" href="https://ritual.com/shop-all">
                  <span style={{ color: "white" }}>Shop All</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
      {/* <Products /> */}
    </div>
  );
}

export default Home;
