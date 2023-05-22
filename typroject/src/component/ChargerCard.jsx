import React from "react";
import charger from "../Data/Charger";
import { NavLink } from "react-router-dom";

const ChargerCard = () => {
  return (
    <>
      <div className=" container p-3 shadow p-3">
        <div className="row jcc">
          {charger.map((user, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <div className="card phone-container">
                <NavLink className="nav-link" to="/featurecharger">
                  <img
                    src={user.imgsrc}
                    alt=""
                    className="col-img-top- img-container"
                  />
                </NavLink>

                <div className="card-body">
                  <p className="card-text">{user.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ChargerCard;
