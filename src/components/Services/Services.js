import React from "react";
//Components
//Includes
import coding from "../../Assets/images/services/coding.png";
import settings from "../../Assets/images/services/settings.png";
import computer from "../../Assets/images/services/computer.png";
import websiteDesign from "../../Assets/images/services/website-design.png";
/*import websiteOptimization from "../../Assets/images/services/website-optimization.png";
import analytics from "../../Assets/images/services/analytics.png";*/

const Services = () => {
  return (
    <div className="mt-5 mb-5 service">
      <div className="center main-heading">WHAT WE DO?</div>
      <hr className="horizontal-line" />
      <div className="center mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div className="row center mt-5">
        <div className="col-md-3">
          <img
            className="service-img service-1"
            src={coding}
            alt="coding-icon"
            width="20%"
          />
          <div className="sub-heading">Service 1</div>
          <div className="what-we-d0-content">Ut enim ad minima veniam</div>
        </div>

        <div className="col-md-3">
          <img
            className="service-img"
            src={computer}
            alt="computer-icon"
            width="20%"
          />
          <div className="sub-heading">Service 2</div>
          <div className="what-we-d0-content">Ut enim ad minima veniam</div>
        </div>

        <div className="col-md-3">
          <img
            className="service-img"
            src={settings}
            alt="settings-icon"
            width="20%"
          />
          <div className="sub-heading">Service 3</div>
          <div className="what-we-d0-content">Ut enim ad minima veniam</div>
        </div>

        <div className="col-md-3">
          <img
            className="service-img"
            src={websiteDesign}
            alt="website-design-icon"
            width="20%"
          />
          <div className="sub-heading">Service 4</div>
          <div className="what-we-d0-content">Ut enim ad minima veniam</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
