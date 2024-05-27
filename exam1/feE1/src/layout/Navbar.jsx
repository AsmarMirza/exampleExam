import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  function isExist() {
    setDropDown(!dropDown);
  }
  return (
    <div className="navbar">
      <h1>Pulse.</h1>
      <ul className="myUl">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/admin"}>Admin</Link>
        </li>
        <li>
          <Link to={"/add"}>Add</Link>
        </li>
        <li>
          <Link to={"/basket"}>Basket</Link>
        </li>
      </ul>

      {dropDown && (
        <ul className="dropdown">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/admin"}>Admin</Link>
          </li>
          <li>
            <Link to={"/add"}>Add</Link>
          </li>
          <li>
            <Link to={"/basket"}>Basket</Link>
          </li>
        </ul>
      )}

      <div className="bar">
        <i onClick={isExist} className="fa-solid fa-bars"></i>
      </div>
      <div className="contact">
        <p className="diftextNav">Reservations</p>
        <p>
          {" "}
          <i className="fa-solid fa-phone"></i> 652-345 3222 11
        </p>
      </div>
    </div>
  );
}

export default Navbar;
