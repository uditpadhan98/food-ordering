import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style.css";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    }

    if (json.success) {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div style={{ paddingTop: "1rem" }}>
          <div className="container h-80" id="logInForm">
            <div className="container py-5 h-100">
              <div className="row d-flex align-items-center justify-content-center h-100">
                <div className="col-md-8 col-lg-7 col-xl-6">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    className="img-fluid"
                    alt="Phone"
                  />
                </div>
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-2">
                    Log In
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <label className="form-label" for="form1Example13">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="form1Example13"
                        className="form-control"
                        name="email"
                        value={credentials.email}
                        onChange={onChange}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="form1Example23">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form1Example23"
                        className="form-control"
                        name="password"
                        value={credentials.password}
                        onChange={onChange}
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <button
                        id="logInBtn"
                        type="submit"
                        className="btn btn-primary mt-2"
                      >
                        log In
                      </button>

                      <p className="text-center fw-bold mt-3 text-muted">OR</p>
                  
                      <Link to="/createUser" className="m-3">
                        Create Account
                      </Link>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
