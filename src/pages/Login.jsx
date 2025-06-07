import React, { useState } from "react";

import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../configs/firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
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
              <form onSubmit={onLogin}>
                <div className="project-info-form custom-form-width form-login">
                  <h6 className="title">Login</h6>
                  <h6 className="title show-mobie">
                    <Link to="/signup">Signup</Link>
                  </h6>
                  <h6 className="title link">
                    <Link to="/signup">Signup</Link>
                  </h6>
                  <p>Enter your credentials to access your account</p>
                  <div className="form-inner">
                    <fieldset>
                      <label>Email address *</label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </fieldset>
                    <fieldset>
                      <label>Password *</label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Your password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </fieldset>
                  </div>
                  <Link to="/forgetPass" className="fogot-pass">
                    Forgot password?
                  </Link>
                </div>

                <div className="wrap-btn">
                  <button type="submit" className="tf-button style2">
                    Login
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

export default Login;
