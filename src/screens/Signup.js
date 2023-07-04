import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";
import { BASE_URL } from './Helper';

const Signup = () => {
  let navigate=useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/api/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });
    const json = await response.json();
    
    // console.log(json);
    
    if (json.success) {
      alert("Account created successfully");
      navigate("/");
    }

    if (!json.success) {
      alert("Enter Valid Credentials");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <section className="vh-80" style={{ backgroundColor: "#eee" }}>
        <div id="signUpForm" className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-3">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example1c">
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name="name"
                              value={credentials.name}
                              onChange={onChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example3c">
                              Your Email
                            </label>
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              name="email"
                              value={credentials.email}
                              onChange={onChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example4c">
                              Password
                            </label>
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              name="password"
                              value={credentials.password}
                              onChange={onChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" for="form3Example4cd">
                              Address
                            </label>
                            <input
                              type="text"
                              id="form3Example4cd"
                              className="form-control"
                              name="geolocation"
                              value={credentials.geolocation}
                              onChange={onChange}
                            />
                          </div>
                        </div>

                        {/* <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div> */}

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                        <Link to="/login" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                          Already a User
                        </Link>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div classNameName="container">
      <form onSubmit={handleSubmit}>
        <div classNameName="mb-3">
          <label htmlFor="name" classNameName="form-label">
            Name :
          </label>
          <input
            type="text"
            classNameName="form-control"
            name="name"
            value={credentials.name}
            onChange={onChange}
          />
        </div>
        <div classNameName="mb-3">
          <label htmlFor="exampleInputEmail1" classNameName="form-label">
            Email address :
          </label>
          <input
            type="email"
            classNameName="form-control"
            name="email"
            value={credentials.email}
            onChange={onChange}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" classNameName="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div classNameName="mb-3">
          <label htmlFor="exampleInputPassword1" classNameName="form-label">
            Password :
          </label>
          <input
            type="password"
            classNameName="form-control"
            name="password"
            value={credentials.password}
            onChange={onChange}
            id="exampleInputPassword1"
          />
        </div>
        <div classNameName="mb-3">
          <label htmlFor="exampleInputPassword1" classNameName="form-label">
            Address :
          </label>
          <input
            type="text"
            classNameName="form-control"
            name="geolocation"
            value={credentials.geolocation}
            onChange={onChange}
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" classNameName="btn btn-primary">
          Submit
        </button>
        <Link to="/login" classNameName="m-3 btn btn-danger">Already a User</Link>
      </form>
    </div> */}
    </>
  );
};

export default Signup;
