import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";
import logo from "./image/logo.png";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import PowerIcon from "@mui/icons-material/Power";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigation = useNavigate();
  const Submit = () => {
    navigation("/");
  };
  return (
    <>
      <div className="container-fluid my-lg-4">
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#929fba" }}
        >
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    <img
                      src={logo}
                      alt=""
                      onClick={Submit}
                      style={{ width: "70px" }}
                    ></img>
                    &nbsp; The SmartPhones Store
                  </h6>
                  <p>
                    Here you can buy latest smartphone and mobile accessories
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Products
                  </h6>

                  <p>
                    <NavLink className="nav-link" to="/smartphone">
                      <SmartphoneIcon />
                      SmartPhones
                    </NavLink>
                  </p>
                  <p>
                    <NavLink className="nav-link" to="/headphone">
                      <HeadphonesIcon />
                      Headphones
                    </NavLink>
                  </p>
                  <p>
                    <NavLink className="nav-link" to="/charger">
                      <PowerIcon />
                      Chargers
                    </NavLink>
                  </p>
                  <p>
                    <a className="text-white">Phone Covers</a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>
                    <AddLocationAltIcon />
                    Maharastra, (Mumbai) Mira Road(E) *
                  </p>
                  <p>
                    <EmailIcon />
                    smartphoneshoter999@gmail.com
                  </p>
                  <p>
                    <CallIcon /> +91 8999 999 999
                  </p>
                  <p>
                    <CallIcon /> +91 8999 999 999
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Follow us
                  </h6>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#3b5998" }}
                    href="https://www.facebook.com/officialsmartphonestore?mibextid=ZbWKwL"
                    role="button"
                  >
                    <FacebookIcon />
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#55acee" }}
                    href="#!"
                    role="button"
                  >
                    <TwitterIcon />
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#dd4b39" }}
                    href="#!"
                    role="button"
                  >
                    <GoogleIcon />
                  </a>

                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#ac2bac" }}
                    href="https://instagram.com/officialsmartphonestore?igshid=NTc4MTIwNjQ2YQ=="
                    role="button"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Copyright: Mobile Shop. All rights reserved.
            {/* <a className="text-white" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a> */}
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
