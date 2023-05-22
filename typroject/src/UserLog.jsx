import React from "react";
import "./login.css";
import { useFormik } from "formik";
import Validation from "./schemas/Validation";
import { useNavigate } from "react-router-dom";

const initialValue = {
  username: "",
  password: "",
};

const UserLog = () => {
  const navigation = useNavigate();
  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValue,
    validationSchema: Validation,
    onSubmit: (values, action) => {
      console.log("This values are manually passed: ", values);
      action.resetForm();

      navigation("/");
    },
  });

  return (
    <>
      <div className="container ">
        <div className="row justify-content-center main_container p-5">
          <div className="col-md-4">
            <div className="card log_container p-3">
              <div className="card_header p-3 ">
                <h4 className="head">login</h4>
              </div>
              <div className="card-body" id="card__Body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group p-3">
                    {/* <label htmlFor="username">Username</label> */}
                    <input
                      type="email"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Enter E-mail ID"
                      value={values.username}
                      onChange={handleChange}
                    />
                    {errors.username && touched.username ? (
                      <p className="form-error">{errors.username}</p>
                    ) : null}
                  </div>
                  <div className="form-group p-3">
                    {/* <label htmlFor="password">Password</label> */}
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      placeholder="Password"
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                  </div>
                  <div className="row ">
                    <div className="col d-flex justify-content-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="form2Example31"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example31"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>

                    <div className="col">
                      <a href="#!">Forgot password?</a>
                    </div>
                  </div>
                  <div className="btn_center">
                    <button
                      id="button"
                      type="submit"
                      className="btn btn-primary btn-block "
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
export default UserLog;
