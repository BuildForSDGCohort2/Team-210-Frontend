import React, { useEffect, useState } from "react";
import Popper from "popper.js";
import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { getHistory } from "./services/fetch-data";
import { filterData } from "./services/utility";

function App() {
  const [history, setHistory] = useState([]);
  const [showList, setShowList] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [searchedValue, setSearched] = useState("");

  useEffect(() => {
    getHistory().then((res) => {
      let historyData = res.data;
      setHistory(historyData);
      setFiltered(historyData);
    });
  }, []);

  const handleSearch = (e) => {
    setSearched(e.target.value);
    let filtered = filterData(history, e.target.value);
    setFiltered(filtered);
  };
  return (
    <div className="container-fluid bg-secondary">
      <div className="row bg-secondary">
        <div className="card  w-100 title-card text-white  row justify-content-center align-items-center pl-5">
          <h1 className="mt-4 mb-1">Search for the fastest route</h1>
          <p className="lead">Avoid the traffic the clever way</p>
          <div className="form-group search-container">
            <div className="input-group mb-3 ">
              <input
                type="text"
                className="form-control search-input"
                placeholder="E.g Westlands"
                onMouseEnter={() => setShowList(true)}
                onChange={handleSearch}
                value={searchedValue}
              />
              <div className="input-group-append">
                <span className="input-group-text link">Search</span>
              </div>
            </div>
            {showList && (
              <div
                className="w-100 optional-list"
                onMouseLeave={() => {
                  setShowList(false);
                }}
              >
                {filtered.map((hist) => (
                  <div
                    className="shadow shadow-secondary m-1 p-1  single-option bg-dark link"
                    key={hist.id}
                    onClick={() => {
                      setShowList(false);
                      setSearched(hist.end_location);
                    }}
                  >
                    {hist.end_location}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="card w-100">
          <div className="row justify-content-center mt-1 p-2">
            {history.map((helper) => (
              <div
                className="card shadow shadow-secondary col-md-11 history-card"
                key={helper.id}
              >
                <div className="w-100 text-center">
                  <div className="float-left">{helper.start_location}</div>-
                  <div className="float-right">{helper.end_location}</div>
                </div>
                <div className="w-100">
                  <div className="text-success p-1 h6 float-left">
                    Saved {helper.saved_time}
                  </div>
                  <div className="float-right">{helper.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
