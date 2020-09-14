import React from "react";
import Popper from "popper.js";
import 'jquery'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'


function App() {
  let displayHelper = [1,2,3,4,4,5,5,6,6,6,,7];
  return (
    <div className="container-fluid bg-secondary">
      <div className="row bg-secondary">
        <div className="card  w-100 title-card text-white  row justify-content-center align-items-center pl-5">
          <h1 className="mt-4 mb-1">Search for the fastest route</h1>
            <p className="lead">Avoid the traffic the clever way</p>
          <div className="form-group search-container">
            <div className="input-group mb-3 ">
              <input type="text" className="form-control search-input" placeholder="E.g Westlands"/>
                <div className="input-group-append">
                  <span className="input-group-text link">Search</span>
                </div>
            </div>
          </div>
        </div>
        <div className="card w-100">
          <div className="row justify-content-center mt-1 p-2">
            {
              displayHelper.map(helper=> <div className="card shadow shadow-secondary col-md-11 history-card" key={helper}>
                <div className="w-100 text-center">
                  <div className="float-left">South C</div>
                  -
                  <div className="float-right">
                    Juja
                  </div>
                </div>
                <div className="text-success p-1 h6">Saved 50min</div>
              </div>)
            }
          </div>
        </div>
      </div>
    </div>
    
  )
}


export default App;