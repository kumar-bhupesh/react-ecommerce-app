import React from "react";
import "./serviceHighlights.css";
import { serviceHighlightsData } from "../../data/serviceHighlightsData";

const ServiceHighlights = () => {
  return (
    <section className="service-highlights">
      <div className="container-xl">
        <div className="row justify-content-center">
          {serviceHighlightsData.map((eachItem) => (
            <div key={eachItem.id} className="col-10 col-sm-6 col-lg-3 my-2">
              <div
                className="service-highlights__card"
                style={{ background: eachItem.bgColor }}
              >
                <div className="service-highlights__card-icon">
                  {eachItem?.icon}
                </div>
                <h4 className="service-highlights__card-title">
                  {eachItem.title}
                </h4>
                <p className="text-muted">{eachItem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
