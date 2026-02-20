import React from "react";
import logo from "../assets/textlogo.png";
export default function NavBar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-black py-2 py-lg-3"
      >
        <div className="container-fluid px-3 px-md-4">
          <a className="navbar-brand d-flex align-items-center gap-2 text-white text-decoration-none" href="/">
            <img
              src={logo}
              width="42"
              height="30"
              className="d-inline-block align-text-top nav-logo"
              alt="TextUtils"
            />
            <span className="fw-semibold">TextUtils</span>
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/about">
                  About
                </a>
              </li>
            </ul>
           
              
            
          </div>
        </div>
      </nav>
    </div>
  );
}
