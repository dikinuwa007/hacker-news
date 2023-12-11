// import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {


  return (
    <div>
      <nav>
        <div
          className="navbar navbar-expand-lg navbar-dark p-6"
          style={{ backgroundColor: "#272397",height:5+'vh',paddingLeft:10+'vw', paddingRight:10+'vw',justifyContent:'space-between' }}
        >
          <div style={{justifyContent:'flex-start'}}>
          <span className="" style={{fontPalette:'normal',color:'white'}}> #1 Trusted Cybersecurity News Platform</span>
          </div>
          <div style={{justifyContent:'flex-end',color:'white'}}>
          <i style={{width:3+'vw',height:3+'vh',fontSize:1+'em',marginLeft:2.5+'vw'}}>Followed by 4.50+ million</i>
          <i className="icon-twitter" style={{width:3+'vw',height:3+'vh',fontSize:1.5+'em',marginLeft:2.5+'vw'}}></i>
          <i className="icon-linkedin" style={{width:3+'vw',height:3+'vh',fontSize:1.5+'em',marginLeft:2.5+'vw'}}></i>
          <i className="icon-facebook" style={{width:3+'vw',height:3+'vh',fontSize:1.5+'em',marginLeft:2.5+'vw'}}></i>
          </div>
        </div>

      </nav>
      <nav
        className="navbar navbar-light p-6"
        style={{ backgroundColor: "#3732b3",paddingLeft:10+'vw',paddingRight:10+'vw'}}
      >
        <Link
          className="navbar-brand"
          to={'/posts'}
          style={{ justifyContent: "flex-start" }}
        >
          <img src="https://i.ibb.co/0nMFK9d/download.png" alt="" style={{ height: 40 }} />
        </Link>
        <a
          className="navbar-brand"
          href="#"
          style={{ justifyContent: "flex-end" }}
        >
          <button className="btn btn-lg" style={{width:180,height:50,backgroundColor:'yellow'}}>Subscribe please</button>
        </a>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse pl-6 pr-6" style={{paddingLeft:8+'vw',paddingRight:8+'vw'}} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Data Breaches
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cyber Attacks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Vulnerabilities
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Webinars
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Store
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{ justifyContent: "flex-end",marginRight:10+'vw' }}
        >
          <ul className="navbar-nav">
            <li className="nav-item active"style={{marginRight:5+'vw'}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </li>
            <li>
              <span className="navbar-toggler-icon"></span>
            </li>

          </ul>
        </div>
      </nav>
    </div>
    //

    //
  );
};

export default Navbar;
