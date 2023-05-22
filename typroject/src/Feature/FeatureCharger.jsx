import React from "react";
import { useNavigate } from "react-router-dom";
const FeatureCharger = () => {
  const navigation = useNavigate();
  const onsubmit = () => {
    navigation("/signup");
  };
  return (
    <>
      <br />
      <br />
      <div className="container" style={{ width: "100%" }}>
        <div className="row justify-content-center">
          <div className="col-md-4" id="phone-image">
            <div className="container" style={{ marginTop: "30px" }}>
              <div
                id="carouselExampleControlsNoTouching"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://m.media-amazon.com/images/I/51w2HcialIL._SL1500_.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  {/* <div className="carousel-item">
                    <img
                      src="https://m.media-amazon.com/images/I/610pghkO81L._SL1500_.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://m.media-amazon.com/images/I/610pghkO81L._SL1500_.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div> */}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                    id="slide-Icon"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControlsNoTouching"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

          <div
            className="col-md-8 shadow"
            style={{ padding: "40px" }}
            id="detail"
          >
            <div className="card-body" id="card__Body">
              <h6 className="card-title" id="heading">
                Mi USB 18W Dual Port Charger|Dual USB Port|Certified Qualcomm
                Quick Charge
              </h6>
              <hr />
              <h4 className="card-text">₹599</h4>
              <p>Inclusive of all taxes</p>
              <div className="d-grid gap-2  justify-content-md-start">
                <button
                  className="btn btn-primary me-md-2"
                  onClick={onsubmit}
                  type="button"
                >
                  Buy&nbsp;Now
                </button>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col fw-bold">
                <p>Brand:</p>
                <p>connectivity Technology:</p>
                <p>connector type:</p>
                <p>Compatible Devices:</p>
                <p>Compatible Phone:</p>
              </div>
              <div className="col">
                <p> MI</p>
                <p>USB</p>

                <p>USB</p>

                <p>Cellular Phones</p>
                <p>Cellular phones</p>
              </div>
            </div>
            <hr />
            <h5>About this item</h5>
            <div className="col-sm-12">
              <p>Dual Usb Ports; Bis Certified</p>

              <p>- 380V Surge Protection</p>

              <p>- Qualcomm Qc 3.0 Compatible</p>
              <p>- Colour: Black </p>

              <p>- Power Source Type: Corded Electric</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCharger;
