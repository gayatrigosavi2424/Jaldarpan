import React, { useState } from "react";
import "../styles.css";

const Ticket = () => {
  const [formData, setFormData] = useState({
    serialNo: "",
    location: "",
    personalDetails: "",
    contact: "",
    error: "",
    dateOfResolution: "",
    expense: "",
  });

  const [history, setHistory] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { error, personalDetails } = formData;

    // Add new entry at the top and limit to 5 items
    setHistory((prevHistory) => {
      const updatedHistory = [{ error, personalDetails }, ...prevHistory];
      return updatedHistory.slice(0, 5); // Keep only the latest 5 items
    });

    // Clear the form
    setFormData({
      serialNo: "",
      location: "",
      personalDetails: "",
      contact: "",
      error: "",
      dateOfResolution: "",
      expense: "",
    });
  };

  return (
    <div className="ticket-container">
      <h2 className="title">Ticket Resolution Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Serial No:
          <input
            type="text"
            name="serialNo"
            value={formData.serialNo}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Person Details (Name):
          <input
            type="text"
            name="personalDetails"
            value={formData.personalDetails}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Error Description:
          <input
            type="text"
            name="error"
            value={formData.error}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date of Resolution:
          <input
            type="date"
            name="dateOfResolution"
            value={formData.dateOfResolution}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Expense:
          <input
            type="number"
            name="expense"
            value={formData.expense}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      <h2 className="title">History</h2>
      <table className="history-table">
        <thead>
          <tr>
            <th>Error</th>
            <th>Person Name</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td>{item.error}</td>
              <td>{item.personalDetails}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ticket;
