import { useState } from "react";
import "./App.css";

function App() {
  const [PersonalDetails, setPersonalDetails] = useState({
    FirstName: "",
    LastName: "",
    EmailAddress: "",
    PhoneNumber: "",
    DateOfBirth: "",
    StreetAddress: "",
    ApartmentNumber: "",
    ZipCode: "",
    State: "",
    ResidentialProof: "Driver License",
    ResidentialProofID: "1",
    IdNumber: "",
    IdState: "",
  });

  const [errors, setErrors] = useState({
    FirstName: "",
    LastName: "",
    EmailAddress: "",
    PhoneNumber: "",
    DateOfBirth: "",
    StreetAddress: "",
    ApartmentNumber: "",
    ZipCode: "",
    State: "",
    ResidentialProof: "Driver License",
    ResidentialProofID: "1",
    IdNumber: "",
    IdState: "",
  });

  // console.log(PersonalDetails);

  const changeHandler = (e) => {
    let name = e.target.name;
    setPersonalDetails({
      ...PersonalDetails,
      [name]: e.target.value,
    });
  };

  const validateForm = async (val) => {
    const formValues = Object.entries(val);
    formValues.some((item) => {
      if (item[1] === "") {
        setErrors({
          ...errors,
          [item[0]]: "This field is required",
        });
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await validateForm(PersonalDetails);
  };
  console.log(errors);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="FirstName"
            value={PersonalDetails.FirstName}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="LastName"
            value={PersonalDetails.LastName}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="EmailAddress"
            value={PersonalDetails.EmailAddress}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="number"
            name="PhoneNumber"
            value={PersonalDetails.PhoneNumber}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="number"
            name="DateOfBirth"
            value={PersonalDetails.DateOfBirth}
            onChange={changeHandler}
          />
        </div>
        <h3>Address</h3>
        <div>
          <label>Street Address</label>
          <input
            type="string"
            name="StreetAddress"
            value={PersonalDetails.StreetAddress}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Apartment Number</label>
          <input
            type="number"
            name="ApartmentNumber"
            value={PersonalDetails.ApartmentNumber}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Zip Code</label>
          <input
            type="number"
            name="ZipCode"
            value={PersonalDetails.ZipCode}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>State</label>
          <input
            type="number"
            name="State"
            value={PersonalDetails.State}
            onChange={changeHandler}
          />
        </div>
        <h3>Identification</h3>
        <div>
          <input
            type="radio"
            name="ResidentialProof"
            value={PersonalDetails.ResidentialProof}
            onChange={changeHandler}
            id=""
          />
          <label htmlFor="">Driver License</label>
        </div>
        <div>
          <input
            type="radio"
            name="ResidentialProof"
            value={PersonalDetails.ResidentialProof}
            onChange={changeHandler}
            id=""
          />
          <label htmlFor="">Non Driver</label>
        </div>
        <div>
          <input
            type="radio"
            name="ResidentialProof"
            value={PersonalDetails.ResidentialProof}
            onChange={changeHandler}
            id=""
          />
          <label htmlFor="">US Military</label>
        </div>
        <div>
          <input
            type="radio"
            name="ResidentialProof"
            value={PersonalDetails.ResidentialProof}
            onChange={changeHandler}
            id=""
          />
          <label htmlFor="">US Passport</label>
        </div>
        <div>
          <label>ID Number</label>
          <input
            type="number"
            name="IdNumber"
            value={PersonalDetails.IdNumber}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>ID State</label>
          <input
            type="string"
            name="IdState"
            value={PersonalDetails.IdState}
            onChange={changeHandler}
          />
        </div>
        <button type="submit">Apply Now</button>
      </form>
    </div>
  );
}

export default App;
