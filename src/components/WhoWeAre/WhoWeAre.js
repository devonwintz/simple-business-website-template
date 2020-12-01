import React from "react";
//Components
//Includes

const WhoWeAre = () => {
  return (
    <div className="mt-5 service container-fluid">
      <div className="row" id="who-we-are">
        {/*Full Row On XS Screens & Small Screens. While Half Row On Medium To XS Screens*/}
        <div className="col-12 col-sm-12 col-md-6">
          <div className="d-none d-lg-block text-center bigLabel">
            WHO <br />
            <span className="biggerLabel">WE </span>ARE
          </div>
          <div className="d-none d-lg-block text-center">
            Helping People Work Smarter
          </div>
        </div>

        <div className="col-12 col-md-12 d-block d-md-block d-lg-none">
          <div className="">
            <div className="center main-heading">WHO WE ARE</div>
            <hr className="horizontal-line" />
          </div>
        </div>
        {/*Full Row On XS Screens & Small Screens As Well As On Medium Screens. While Hald On XS Screens*/}
        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
          <div className="font-weight-bold text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="text-justify mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.{" "}
            <a className="gold" href="/simple-business-website-template">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
