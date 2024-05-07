import "./App.css";
import React, { useState } from "react";
const App = () => {
  const [Calculate, SetCulcuate] = useState({
    Amount: "",
    Rate: "",
    TimeYears: "",
    TimeMonths: "",
  });
  const [Total, setTotal] = useState(0);

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    SetCulcuate((prevalue) => {
      return {
        ...prevalue, // Spread Operator
        [name]: value,
      };
    });
  };
  const calFun = () => {
    let totalTime =
      parseInt(Calculate.TimeYears * 12) + parseInt(Calculate.TimeMonths);
    let value = Calculate.Amount * Calculate.Rate * totalTime;
    let tvalue = value / 100;
    setTotal(tvalue);
  };
  const ResetFun = () => {
    SetCulcuate({
      Amount: "",
      Rate: "",
      TimeYears: "",
      TimeMonths: "",
    });
    setTotal(0);
  };

  return (
    <>
      <div className="interestForm">
        <h1
          style={{
            textAlign: "center",
            color: "#e94ad9",
            backgroundColor: "white",
            textShadow: "rgb(118 255 0) 2px 2px;",
          }}
        >
          Interest Calculator
        </h1>
        <div> Total Interest </div> <div className="Total">{Total}</div>
        <br />
        <div>
          <div style={{ marginLeft: "37px" }}>
            <label>
              {" "}
              <h5>Amount</h5>
            </label>{" "}
            &nbsp;
            <input
              type="text"
              name="Amount"
              value={Calculate.Amount}
              onChange={handleChange}
            />
          </div>
          <br />
          <label>
            {" "}
            <h5>Interest Rate</h5>
          </label>
          &nbsp;
          <input
            type="text"
            name="Rate"
            value={Calculate.Rate}
            onChange={handleChange}
          />
          <br />
          <br />
          <div style={{ marginLeft: "8px" }}>
            <label>
              {" "}
              <h5>Time Period</h5>
            </label>
            &nbsp;
            <input
              type="text"
              name="TimeYears"
              value={Calculate.TimeYears}
              onChange={handleChange}
              style={{ width: "70px" }}
              placeholder="Years"
            />
            &nbsp;
            <input
              type="text"
              name="TimeMonths"
              value={Calculate.TimeMonths}
              onChange={handleChange}
              style={{ width: "70px" }}
              placeholder="Months"
            />
          </div>
        </div>
        <br />
        <div style={{ paddingLeft: "220px" }}>
          <button class="btn btn-primary" onClick={calFun}>
            Calculate
          </button>
          &nbsp;
          <button class="btn btn-danger" onClick={ResetFun}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
