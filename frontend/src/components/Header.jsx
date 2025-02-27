import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Navbar = () => {
  return (
    <div className="sticky-top">
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-xl navbar-dark bg-blue">
        <div className="container-fluid">
          {/* Logo Section */}
          <Link className="navbar-brand" to="/">
            <img
              src="../images/logo.png"
              className="img-fluid"
              alt="CVR LOGO"
              style={{ width: "100%", height: "60px" }}
            />
          </Link>
          {/* Navbar Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item marlin">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {/* Academics Dropdown */}
              <li className="nav-item dropdown marlin">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Academics
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/academics/objectives">
                      Objectives
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/academics/academic-calender"
                    >
                      Academic Calendar
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/academics/syllabus-books"
                    >
                      Syllabus Books
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/academics/time-tables">
                      Time Tables
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Infrastructure Dropdown */}
              <li className="nav-item dropdown marlin">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Infrastructure
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/infrastructure/laboratories"
                    >
                      Laboratories
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/infrastructure/classrooms"
                    >
                      Classrooms
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/infrastructure/seminar-hall"
                    >
                      Seminar Hall
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/infrastructure/library"
                    >
                      Library
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Faculty Dropdown */}
              <li className="nav-item dropdown marlin">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Faculty
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/faculty/teaching">
                      Teaching
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/faculty/non-teaching">
                      Non-Teaching
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/faculty/admin">
                      Admin
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/faculty/technicalstaff"
                    >
                      Technical Staff
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Student Corner Dropdown */}
              <li className="nav-item dropdown marlin">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Student Corner
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/studentcorner/e-resources"
                    >
                      E-Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/studentcorner/student-work"
                    >
                      Student Work
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/studentcorner/gallery">
                      Gallery
                    </Link>
                  </li>
                </ul>
              </li>
              {/* About & Contact Links */}
              <li className="nav-item marlin">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item marlin">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12  headerStyle">
            <p>Department of Computer Science and Engineering</p>
            {/* Marquee Section */}
            <div className="container-fluid marqueeStyle">
              <marquee
                className="marformat"
                scrollamount="15"
                onMouseOver={(e) => e.target.stop()}
                onMouseOut={(e) => e.target.start()}
              >
                <span>
                  <label style={{ marginRight: "20px" }}>Notifications:</label>
                  <span className="blink">Flash</span>
                  <a className="text-white mr-4" href="#">
                    Department is organizing a 10-day Skill Development Course
                    on Web Technologies starting from 14.06.2023 to 24.06.2023.
                  </a>
                  <span className="blink">Flash</span>
                  <a className="text-white mr-4" href="#">
                    Department is organizing a 10-day Skill Development Course
                    on Web Technologies starting from 14.06.2023 to 24.06.2023.
                  </a>
                </span>
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
