import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/firebase";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div className="inner-page">
      <section className="page-title">
        <div className="overlay"></div>
      </section>
      <section className="tf-section project-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form onSubmit={onSubmit}>
                <div className="project-info-form custom-form-width form-login style2">
                  <h6 className="title">Signup</h6>
                  <h6 className="title show-mobie">
                    <Link to="/login">Login</Link>
                  </h6>
                  <h6 className="title link">
                    <Link to="/login">Login</Link>
                  </h6>
                  <p>Welcome to Hyperlink, please enter your details</p>
                  <div className="form-inner">
                    <fieldset>
                      <label>Email address *</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        required
                      />
                    </fieldset>
                    <fieldset>
                      <label>Password *</label>
                      <input
                        type="password"
                        placeholder="Your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </fieldset>
                    <fieldset className="mb19">
                      <label>Confirm password *</label>
                      <input
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </fieldset>
                    {error && (
                      <p style={{ color: "red" }} className="error">
                        {error}
                      </p>
                    )}
                    <fieldset className="checkbox">
                      <input type="checkbox" id="checkbox" name="checkbox" />
                      <label htmlFor="checkbox" className="icon"></label>
                      <label htmlFor="checkbox">
                        I accept the Term of Conditions and Privacy Policy
                      </label>
                    </fieldset>
                  </div>
                </div>

                <div className="wrap-btn">
                  <button
                    type="submit"
                    className="tf-button style2"
                    disabled={!password || password !== confirmPassword}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
