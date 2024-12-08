import React, { useState, useEffect } from "react";
import "../styles.css";

const Alert = () => {
  const [title, setTitle] = useState("Loading..."); // State for the title
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  // Fetch title from the backend
  useEffect(() => {
    fetch("http://localhost:5000/api/get-title") // Replace with your backend API URL
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title || "No Alert"); // Set the title from backend data
        setIsLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error("Error fetching title:", error);
        setTitle("Error fetching title"); // Fallback title in case of error
        setIsLoading(false);
      });
  }, []);

  // Handle button clicks
  const handleResolve = () => {
    console.log("Alert resolved");
    // Add any additional logic here
  };

  const handleFakeAlert = () => {
    console.log("Marked as fake alert");
    // Add any additional logic here
  };

  return (
    <section className="alert water-theme">
      <div className="section-title">
        <h3>{isLoading ? "Loading..." : `${title}!!`}</h3>
      </div>
      <div className="button-group">
        <button className="water-button" onClick={handleResolve}>
          Resolved
        </button>
        <button className="water-button" onClick={handleFakeAlert}>
          Fake Alert
        </button>
      </div>

      <div className="water-card">
        <div className="table-responsive">
          <table className="water-table">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Type</th>
                <th>Date</th>
                <th>Location</th>
                <th>Resolved By</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Type 1</td>
                <td>2023-09-15</td>
                <td>Pimpri, Pune</td>
                <td>John Doe</td>
                <td>
                  <button className="water-button">Download</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Type 2</td>
                <td>2023-08-18</td>
                <td>Pimpri, Pune</td>
                <td>Jane Smith</td>
                <td>
                  <button className="water-button">Download</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Alert;