import axios from "axios";
import React, { useDebugValue, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userContact: "",
  });

  const { userId } = useParams();

  useEffect(() => {
    loadUser();
  });

  const loadUser = async () => {
    const result = await axios.get(
      `http://localhost:8080/getUserById/${userId}`
    );
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>
          <div className="card">
            <div className="card-header">
              Details of User Id :{user.userId}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>User Name :</b>
                  {user.userName}
                </li>
                <li className="list-group-item">
                  <b>User Contact :</b>
                  {user.userContact}
                </li>
                <li className="list-group-item">
                  <b>User Email :</b>
                  {user.userEmail}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
