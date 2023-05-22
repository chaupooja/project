import React from "react";
import "./features.css";
import { useNavigate } from "react-router-dom";
const Feature = () => {
  const navigation = useNavigate();
  const onsubmit = () => {
    navigation("/signup");
  };
  return (
    <>
      <br></br>
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
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://m.media-amazon.com/images/I/610pghkO81L._SL1500_.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
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
              <h5 className="card-title" id="heading">
                Apple iPhone 14 Pro Max (256 GB) - Gold
              </h5>
              <hr />
              <h4 className="card-text">₹1,72,999</h4>
              <p>Inclusive of all taxes</p>
              <div className="d-grid gap-2  justify-content-md-start">
                <button
                  className="btn btn-primary me-md-2"
                  type="button"
                  onClick={onsubmit}
                >
                  Buy&nbsp;Now
                </button>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col fw-bold">
                <p>Brand:</p>
                <p>Model Name:</p>
                <p>Network Service Provider:</p>
                <p>Operating System:</p>
                <p>Cellular Technology:</p>
              </div>
              <div className="col">
                <p>Apple</p>
                <p>Iphone</p>

                <p>Unlocked for All Carriers</p>

                <p>IOS</p>
                <p>5G</p>
              </div>
            </div>
            <hr />
            <h5>About this item</h5>
            <div className="col-sm-12">
              <p>
                - 15.54 cm (6.1-inch) Super Retina XDR display featuring
                Always-On and ProMotion
              </p>

              <p>- Dynamic Island, a magical new way to interact with iPhone</p>

              <p>- 48MP Main camera for up to 4x greater resolution</p>

              <p>- Cinematic mode now in 4K Dolby Vision up to 30 fps</p>
              <p>- Action mode for smooth, steady, handheld videos</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
