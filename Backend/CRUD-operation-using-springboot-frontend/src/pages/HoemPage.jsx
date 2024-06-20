import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function HoemPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/getAllUsers");
    setUsers(result.data);
    console.log(result.data);
  };

  const { userId } = useParams();

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:8080/deleteUser/${userId}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.NO</th>
              <th scope="col">User Name</th>
              <th scope="col">User Contact</th>
              <th scope="col">User Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.userName}</td>
                <td>{user.userContact}</td>
                <td>{user.userEmail}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`getUserById/${user.userId}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/updateUser/${user.userId}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.userId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
