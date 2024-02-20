import React, { useState } from "react";
import "./Forms.css";
const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    fatherName: "",
    motherName: "",
    fathermotherOccupation: "",
    dateOfBirth: "",
    address: "",
    educationalQual: "",
    yearOfPassing: "",
    contactNumber: "",
    parentsContactNumber: "",
    email: "",
    educationalQu: "",
    college: "",
    computerSkills: "",
    currentStatus: "",
    about: "",
    counsellorName: "",
    counsellorEmail: "",
  });

  const [allSubmittedData, setAllSubmittedData] = useState([]);
  const [formError, setFormError] = useState([]);

  //------------ Handle Input chage--------//
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


 function validation(formData) {
    const formError = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      formError.email = "*Email Id is Invalid*";
    } else {
      formError.email = "";
    }
    if (!emailRegex.test(formData.counsellorEmail)) {
      formError.counsellorEmail = "*Email Id is Invalid*";
    } else {
      formError.counsellorEmail = "";
    }
    const phoneRegex = /^\d{10}$/; 
    if(!phoneRegex.test(formData.contactNumber)){
      formError.contactNumber="*Phone Number Should be in 10 digits*"
    }
    else{
      formError.contactNumber='';
    }
    if(!phoneRegex.test(formData.parentsContactNumber)){
      formError.parentsContactNumber="*Phone Number Should be in 10 digits*"
    }
    else{
      formError.parentsContactNumber='';
    }
    
    return formError;
  }

  // -----------submit-----------------//
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validation(formData);
    if (errors.email||errors.counsellorEmail) {
      setFormError(errors);
      return;
    }
    if(errors.contactNumber||errors.parentsContactNumber){
      setFormError(errors);
      return;
    }
    const newData = [...allSubmittedData, formData];
    setAllSubmittedData(newData);
    localStorage.setItem("allSubmittedData", JSON.stringify(newData));

    setFormError([]);
  };

  return (
    <div className="form-container" style={{ overflow: "hidden" }}>
      <div>
        <h1 className=" text-2xl mb-10 font-extrabold">
          Candidate Information Form
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label className=" mb-3 text-left">
            Name:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="text-left">
          <label>
            Father Name:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="text-left">
          <label>
            Mother Name:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="text-left">
          <label>
            Date Of Birth:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="text-left">
          <label>
            Address:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="text-left">
          <label>
            Educational Qualification:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="educationalQual"
              value={formData.educationalQual}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="text-left">
          <label>
            Year Of Passing:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="yearOfPassing"
              value={formData.yearOfPassing}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="text-left">
          <label>
            Contact Number:
            {formError.contactNumber && (
            <p className="text-red-500 text-sm font-bold mt-1">{formError.contactNumber}</p>
          )}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              required
            />
          </label>
         
        </div>
        <div className="text-left">
          <label>
            Parent's Contact Number:
            {formError.parentsContactNumber && (
            <p className="text-red-500 text-sm font-bold mt-1">{formError.parentsContactNumber}</p>
          )}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="parentsContactNumber"
              value={formData.parentsContactNumber}
              onChange={handleInputChange}
              required
            />
          </label>
          
        </div>
        <div className="text-left">
          <label>
            Email Address:
            {formError.email && (
            <p className="text-red-500 text-sm font-bold mt-1">{formError.email}</p>
          )}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          
        </div>
        <div className="">
          <h1 className="text-2xl font-extrabold">Academic Information</h1>
        </div>
        <div className="text-left">
          <label>
            Educational Qualification:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="educationalQu"
              value={formData.educationalQu}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="text-left">
          <label>
            College:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="college"
              value={formData.college}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="text-left">
          <label>
            Computer Skills:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="computerSkills"
              value={formData.computerSkills}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="text-left">
          <label>
            Current Status:
            <select
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="currentStatus"
              value={formData.currentStatus}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Current Status</option>
              <option value="Studying">Studying</option>
              <option value="Working">Working</option>
              <option value="Looking For Job">Looking For Job</option>
            </select>
          </label>
        </div>

        <div className="radio-group text-left">
          <label>
            How Do You came to Know about us?
            <br />
            
            <input
              type="radio"
              name="about"
              value="Call"
              checked={formData.about === "Call"}
              onChange={handleInputChange}
              required
            />
            &nbsp; Call
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="about"
              value="Social Media"
              checked={formData.about === "Social Media"}
              onChange={handleInputChange}
            />
            &nbsp; Social Media
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="about"
              value="Referred"
              checked={formData.about === "Referred"}
              onChange={handleInputChange}
            />
            &nbsp; Referred
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="about"
              value="SMS/Mail"
              checked={formData.about === "SMS/Mail"}
              onChange={handleInputChange}
            />
            &nbsp; SMS/Mail
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="about"
              value="other"
              checked={formData.about === "other"}
              onChange={handleInputChange}
            />
            &nbsp; Other
          </label>
          
          <br />
        </div>
        <div className="text-left">
          <label>
            Counsellor Name:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="counsellorName"
              value={formData.counsellorName}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="text-left">
        
          <label>
            Counsellor Email ID:
            {formError.counsellorEmail && (
            <p className="text-red-500 text-sm font-bold mt-1">{formError.counsellorEmail}</p>
          )}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="counsellorEmail"
              value={formData.counsellorEmail}
              onChange={handleInputChange}
              required
            />
          </label>

        </div>
        <div className="">
          <button type="submit">Submit</button>
        </div>
      </form>
      <br />
      <br />
      {allSubmittedData.length > 0 && (
        <div>
          <h2 className="text-2xl text-green-600">ALL SUBMITTED DATA</h2>
          {allSubmittedData.map((data, index) => (
            <div key={index}>
              <h3 className="text-2xl text-blue-500">Candidate {index + 1}:</h3>
              <p>
                <b>Name:</b> {data.firstName}
              </p>
              <p>
                <b>Father Name:</b> {data.fatherName}
              </p>
              <p>
                <b>Mother Name:</b> {data.motherName}
              </p>
              <p>
                <b>Father/Mother Occupation: </b>
                {data.fathermotherOccupation}
              </p>
              <p>
                <b>Date Of Birth:</b> {data.dateOfBirth}
              </p>
              <p>
                <b>Address:</b> {data.address}
              </p>
              <p>
                <b>Educational Qualification:</b> {data.educationalQual}
              </p>
              <p>
                <b>Year Of Passing:</b> {data.yearOfPassing}
              </p>
              <p>
                <b>Contact Number:</b> {data.contactNumber}
              </p>
              <p>
                <b>Parent's Contact Number:</b> {data.parentsContactNumber}
              </p>
              <p>
                <b>Email Address:</b> {data.email}
              </p>
              <h4 className="text-2xl text-red-600">Academic Information:</h4>
              <p>
                <b>Educational Qualification:</b> {data.educationalQu}
              </p>
              <p>
                <b>College:</b> {data.college}
              </p>
              <p>
                <b>Computer Skills:</b> {data.computerSkills}
              </p>
              <p>
                <b>Current Status:</b> {data.currentStatus}
              </p>
              <p>
                <b>About:</b> {data.about}
              </p>
              <p>
                <b>Counsellor Name:</b> {data.counsellorName}
              </p>
              <p>
                <b>Counsellor Email ID:</b> {data.counsellorEmail}
              </p>

              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyForm;
