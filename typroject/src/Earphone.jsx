import React from "react";
import headphone from "./Data/Headphone";
import { NavLink } from "react-router-dom";

function HeadphoneCard() {
  return (
    <>
      {/* <div className=" container  p-3 shadow p-3">
        <div className="row  jcc">
          {headphone.map((user, i) => (
            <div
              key={i}
              className="card col-md-4  phone-container"
              style={{ width: "18rem" }}
            >
              <img
                src={user.imgsrc}
                alt=""
                className="col-img-top- img-container"
              />
              <div className="card-body">
                <p className="card-text">{user.title}</p>

               
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className=" container   p-3 shadow p-3">
        <div className="row jcc">
          {headphone.map((user, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <div className="card phone-container">
                <NavLink className="nav-link" to="/featureheadphone">
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
}

export default HeadphoneCard;
