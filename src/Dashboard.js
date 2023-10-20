import React, { useState } from "react";
import "./Dashboard.css";
import Slidebar from "./Components/Slidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function Dashboard() {
  
  return (
    <div className="component">
      <body id="page-top">
        {/* <Router> */}
          <div id="wrapper">
            <Slidebar />
            <div id="content-wrapper" className="d-flex flex-column">
              <Routes>
               
              </Routes>
            </div>
          </div>
          
        {/* </Router> */}

        {/* Scroll to Top Button */}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>

        {/*  <!-- Logout Modal--> */}
        <div
          className="modal fade"
          id="logoutModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <a className="btn btn-primary" href="login.html">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Logout Model  */}
      </body>
    </div>
  );
}

export default Dashboard;
