import React from "react";
import { useNavigate } from "react-router-dom";

const FeatureHead = () => {
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
                      src="https://m.media-amazon.com/images/I/71Ko1A7T6KL._SL1500_.jpg"
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
                boAt Rockerz 558 Sunburn Edition with 50MM Drivers, 20 Hours
                Playback, Physical Noise Isolation and Soft Padded Earcups Over
                Ear Wireless Headphone(Techno Purple)
              </h6>
              <hr />
              <h4 className="card-text">₹1,999</h4>
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
                <p>Model Name:</p>
                <p>Colour:</p>
                <p>Headphones form factor:</p>
                <p>Connection Type:</p>
              </div>
              <div className="col">
                <p> BoAt</p>
                <p>Rockerz 550</p>

                <p>Purple</p>

                <p>Over Ear</p>
                <p>Bluetooth</p>
              </div>
            </div>
            <hr />
            <h5>About this item</h5>
            <div className="col-sm-12">
              <p>
                Tap into instant wireless connectivity with the latest Bluetooth
                V5.0
              </p>

              <p>
                - Its 50mm dynamic drivers help pump out immersive audio all day
                long
              </p>

              <p>
                - The mighty 500mAh battery capacity offers a superior playback
                time of up to 20 Hours
              </p>
              <p>
                - It has been ergonomically designed and structured as an
                over-ear headphone to provide the best user experience{" "}
              </p>

              <p>
                - It comes with physical Noise Isolation feature for pure audio
                bliss
              </p>
              <p>
                - One can connect to boAt Rockerz 558 via not one but two modes,
                Bluetooth as well as AUX
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureHead;
