import React, { useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "../styles.css";

// Register necessary Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Reading = () => {
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedReportType, setSelectedReportType] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  // Sample data for water level and water pressure
  const waterLevelData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Water Level (in meters)",
        data: [3.2, 3.5, 3.8, 4.1, 3.9, 4.2],
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const waterPressureData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Water Pressure (in bar)",
        data: [45,44,45,45,46,48,45,45,46],
        borderColor: "#28a745",
        backgroundColor: "rgba(40, 167, 69, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="reading-page container">
      <section className="search-area">
        <div className="current-box">
          <div className="loc-title">
            <h3>Current Location</h3>
          </div>
          <div className="loc">
            <p>Pimpri, Pune 411018</p>
          </div>
        </div>

        <div className="filter">
          <div className="filter-box">
            <div className="state-box">
              <div className="state-title">
                <h3>
                  State <i className="bx bx-chevron-down"></i>
                </h3>
              </div>
            </div>
            <div className="state-box">
              <div className="state-title">
                <h3>
                  District <i className="bx bx-chevron-down"></i>
                </h3>
              </div>
            </div>
            <div className="state-box">
              <div className="state-title">
                <h3>
                  Pincode <i className="bx bx-chevron-down"></i>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graphs Section */}
      <section className="graphs-section">
        <div className="graph-container">
          <h3>Water Level</h3>
          <Line data={waterLevelData} options={options} />
        </div>
        <div className="graph-container">
          <h3>Water Pressure</h3>
          <Line data={waterPressureData} options={options} />
        </div>
      </section>

      
    </div>
  );
};

export default Reading;
