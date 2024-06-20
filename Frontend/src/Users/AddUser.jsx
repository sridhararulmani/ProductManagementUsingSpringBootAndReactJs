import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userContact: "",
  });

  const { userName, userEmail, userContact } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/addUser", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add New User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the New User Name"
                name="userName"
                required
                value={userName}
                maxLength={25}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userEmail" className="form-label">
                User Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter the User Email"
                name="userEmail"
                required
                value={userEmail}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userContact" className="form-label">
                Contact Number
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter the User Contact Number"
                name="userContact"
                required
                maxLength="10"
                value={userContact}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
