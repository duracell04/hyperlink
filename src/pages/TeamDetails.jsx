import React from "react";
import UserDetails from "../components/user_dashboard/userDetails";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Chart } from "../components/token/Chart";

function UserDashboard(props) {
  return (
    <div className="inner-page custom-section">
      <section className="tf-section tf-team-details pt60">
        <div className="container-fluid px-5">
          <div className="row">
            <div className="col-md-3">
              <div
                className="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link tf-button w-100 style4 mb-2 active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Profile
                </button>
                <button
                  className="nav-link tf-button w-100 style4 mb-2"
                  id="v-pills-statistics-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-statistics"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-statistics"
                  aria-selected="false"
                >
                  Toolbox statistics
                </button>
                <button
                  className="nav-link tf-button w-100 style4 mb-2"
                  id="v-pills-payments-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-payments"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-payments"
                  aria-selected="false"
                >
                  Payments
                </button>
                <button
                  className="nav-link tf-button w-100 style4 mb-2"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-edit-profile-tab"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-edit-profile-tab"
                  aria-selected="false"
                >
                  Edit profile
                </button>
              </div>
            </div>
            <div className="col-md-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <UserDetails />
                </div>
                <div
                  className="tab-pane fade tf-section tf-token"
                  id="v-pills-statistics"
                  role="tabpanel"
                  aria-labelledby="v-pills-statistics-tab"
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div
                        className="desc-token"
                        data-aos-delay="500"
                        data-aos="fade-up"
                        data-aos-duration="800"
                      >
                        <div className="total-token">
                          <p>
                            Total Toolboxes: <span>16</span>
                          </p>
                          <p>
                            Monthly total cost: <span> 164.90$</span>
                          </p>
                        </div>
                        <ul className="describe_chart d-flex flex-wrap">
                          <li>
                            <img
                              src={require("../assets/images/chart/color_1.png")}
                              alt="Farming Pool segment"
                            />
                            <div className="desc">
                              <p className="name">Farming Pool</p>
                              <p className="number">27.3%</p>
                            </div>
                          </li>
                          <li>
                            <img
                              src={require("../assets/images/chart/color_2.png")}
                              alt="Staking segment"
                            />
                            <div className="desc">
                              <p className="name">Staking</p>
                              <p className="number">15.3%</p>
                            </div>
                          </li>
                          <li>
                            <img
                              src={require("../assets/images/chart/color_3.png")}
                              alt="Ecosystem segment"
                            />
                            <div className="desc">
                              <p className="name">Ecosystem</p>
                              <p className="number">7.5%</p>
                            </div>
                          </li>
                          <li>
                            <img
                              src={require("../assets/images/chart/color_4.png")}
                              alt="Advisor segment"
                            />
                            <div className="desc">
                              <p className="name">Advisor</p>
                              <p className="number">7.03%</p>
                            </div>
                          </li>
                          <li>
                            <img
                              src={require("../assets/images/chart/color_5.png")}
                              alt="Private Sale segment"
                            />
                            <div className="desc">
                              <p className="name">Private Sale</p>
                              <p className="number">23.45%</p>
                            </div>
                          </li>
                          <li>
                            <img
                              src={require("../assets/images/chart/color_6.png")}
                              alt="Liquidity segment"
                            />
                            <div className="desc">
                              <p className="name">Liquidity</p>
                              <p className="number">13.3%</p>
                            </div>
                          </li>
                          <li>
                            <img
                              src={require("../assets/images/chart/color_7.png")}
                              alt="Marketing segment"
                            />
                            <div className="desc">
                              <p className="name">Marketing</p>
                              <p className="number">7.3%</p>
                            </div>
                          </li>
                          <li>
                            <img
                              src={require("../assets/images/chart/color_8.png")}
                              alt="Team segment"
                            />
                            <div className="desc">
                              <p className="name">Team</p>
                              <p className="number">5.3%</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="500"
                        data-aos-duration="800"
                      >
                        <div id="chart">
                          <Chart />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-payments"
                  role="tabpanel"
                  aria-labelledby="v-pills-payments-tab"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div
                        className="tokenomics-wrapper"
                        data-aos="fade-up"
                        data-aos-duration="800"
                      >
                        <div className="box">
                          <div className="td td1">
                            <p>Category</p>
                            <p>Marketing</p>
                          </div>

                          <div className="td td3">
                            <p>Toolbox</p>
                            <p>Figma</p>
                          </div>
                          <div className="td td4">
                            <p>Cost (Month)</p>
                            <p>14.99$</p>
                          </div>
                          <div className="td td5 w-auto">
                            <p>Subscription card</p>
                            <p>**** **** **** 4172 - mastercard</p>
                          </div>
                        </div>

                        <div className="box">
                          <div className="td td1">
                            <p>Category</p>
                            <p>Marketing</p>
                          </div>

                          <div className="td td3">
                            <p>Toolbox</p>
                            <p>Figma</p>
                          </div>
                          <div className="td td4">
                            <p>Cost (Month)</p>
                            <p>14.99$</p>
                          </div>
                          <div className="td td5 w-auto">
                            <p>Subscription card</p>
                            <p>**** **** **** 4172 - mastercard</p>
                          </div>
                        </div>

                        <div className="box">
                          <div className="td td1">
                            <p>Category</p>
                            <p>Marketing</p>
                          </div>

                          <div className="td td3">
                            <p>Toolbox</p>
                            <p>Figma</p>
                          </div>
                          <div className="td td4">
                            <p>Cost (Month)</p>
                            <p>14.99$</p>
                          </div>
                          <div className="td td5 w-auto">
                            <p>Subscription card</p>
                            <p>**** **** **** 4172 - mastercard</p>
                          </div>
                        </div>

                        <div className="box">
                          <div className="td td1">
                            <p>Category</p>
                            <p>Marketing</p>
                          </div>

                          <div className="td td3">
                            <p>Toolbox</p>
                            <p>Figma</p>
                          </div>
                          <div className="td td4">
                            <p>Cost (Month)</p>
                            <p>14.99$</p>
                          </div>
                          <div className="td td5 w-auto">
                            <p>Subscription card</p>
                            <p>**** **** **** 4172 - mastercard</p>
                          </div>
                        </div>

                        <div className="box">
                          <div className="td td1">
                            <p>Category</p>
                            <p>Marketing</p>
                          </div>

                          <div className="td td3">
                            <p>Toolbox</p>
                            <p>Figma</p>
                          </div>
                          <div className="td td4">
                            <p>Cost (Month)</p>
                            <p>14.99$</p>
                          </div>
                          <div className="td td5 w-auto">
                            <p>Subscription card</p>
                            <p>**** **** **** 4172 - mastercard</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-edit-profile-tab"
                  role="tabpanel"
                  aria-labelledby="v-pills-edit-profile-tab"
                >
                  <form class="row g-3">
                    <div class="col-md-6">
                      <label for="inputEmail4" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputPassword4" class="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="inputPassword4"
                      />
                    </div>
                    <div class="col-12">
                      <label for="inputAddress" class="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St"
                      />
                    </div>
                    <div class="col-12">
                      <label for="inputAddress2" class="form-label">
                        Address 2
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputAddress2"
                        placeholder="Apartment, studio, or floor"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputCity" class="form-label">
                        City
                      </label>
                      <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="col-md-4">
                      <label for="inputState" class="form-label">
                        State
                      </label>
                      <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div class="col-md-2">
                      <label for="inputZip" class="form-label">
                        Zip
                      </label>
                      <input type="text" class="form-control" id="inputZip" />
                    </div>
                    <div class="col-12">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                        />
                        <label class="form-check-label" for="gridCheck">
                          Check me out
                        </label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-primary">
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserDashboard;
