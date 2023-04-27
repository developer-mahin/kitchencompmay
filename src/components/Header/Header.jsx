import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navItem = ["About", "Project"];
  const navItem2 = ["Porcess", "Blog", "Contact Us"];

  console.log(NavLink);

  return (
    <div className="d-lg-flex justify-content-center align-items-center bg-black py-2">
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>

          <Link className="navbar-brand d-block d-lg-none" to="/">
            <img
              width={80}
              src="https://i.ibb.co/N2pBBGV/IKC.png"
              className="img-fluid ps-4"
              alt=""
            />
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-lg-flex justify-content-center align-items-center">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="dropdown-item px-lg-4 fs-5 text-uppercase text-white"
                >
                  Home
                </NavLink>
              </li>

              {navItem.map((item, i) => (
                <li key={i} className="nav-item">
                  <NavLink
                    to={`/${item}`}
                    className="dropdown-item px-lg-4 fs-5 text-uppercase text-white"
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
              <li className="d-none d-lg-block">
                <Link className="navbar-brand" to="/">
                  <img
                    width={150}
                    src="https://i.ibb.co/N2pBBGV/IKC.png"
                    className="img-fluid ps-4"
                    alt=""
                  />
                </Link>
              </li>

              {navItem2.map((item, i) => (
                <li key={i} className="nav-item">
                  <NavLink
                    to="/"
                    className="dropdown-item px-lg-4 fs-5 text-uppercase text-white"
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
