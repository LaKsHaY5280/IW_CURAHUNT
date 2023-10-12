"use client";

import { useState } from "react";

const BloodDonationForm = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    email: "",
    phone: "",
    donorFirstName: "",
    donorLastName: "",
    patientFirstName: "",
    patientLastName: "",
    relationDetails: "",
    hospitalDetails: "",
    dateDetails: "",
    bloodType: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <>
      <section className="section-container">
        <section className="bloodtype">
          <h3 className="bloodheading">Types</h3>
          <div className="types">
            <div className="Group">A+</div>
            <div className="Group">A-</div>
            <div className="Group">AB+</div>
            <div className="Group">AB-</div>
            <div className="Group">B+</div>
            <div className="Group">B-</div>
            <div className="Group">O+</div>
            <div className="Group">O-</div>
          </div>
        </section>{" "}
      </section>{" "}
      <section className="BloodForm">
        <div className="bloodcontainer mx-auto px-4 py-5 bg-f9f9f9 rounded shadow-md max-w-lg">
          <h2 className="font-bold mb-5">Blood Donation Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
            <div className="form-group">
              <label htmlFor="streetAddress">Address:</label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Contact Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                pattern="[0-9]{10}"
              />
            </div>
            <h3>Donation Details</h3>
            <div className="form-group">
              <div className="split">
                <label htmlFor="donorFirstName">First Name (Donor):</label>
                <input
                  type="text"
                  id="donorFirstName"
                  name="donorFirstName"
                  required
                />
              </div>
              <div className="split">
                <label htmlFor="donorLastName">Last Name (Donor):</label>
                <input
                  type="text"
                  id="donorLastName"
                  name="donorLastName"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="split">
                <label htmlFor="patientFirstName">First Name (Patient):</label>
                <input
                  type="text"
                  id="patientFirstName"
                  name="patientFirstName"
                  required
                />
              </div>
              <div className="split">
                <label htmlFor="patientLastName">Last Name (Patient):</label>
                <input
                  type="text"
                  id="patientLastName"
                  name="patientLastName"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="bloodType">Blood Type:</label>
              <select id="bloodType" name="bloodType" required>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="relationDetails">Relation:</label>
              <input
                type="text"
                id="relationDetails"
                name="relationDetails"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="hospitalDetails">Hospital:</label>
              <input
                type="text"
                id="hospitalDetails"
                name="hospitalDetails"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dateDetails">Date:</label>
              <input type="date" id="dateDetails" name="dateDetails" required />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer"
            >
              Submit
            </button>
          </form>
          {showPopup && (
            <div className="popup fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded shadow-md p-5">
              <p className="text-center mb-4">
                Your details have been submitted. We will contact you soon!
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer"
              >
                OK
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BloodDonationForm;
