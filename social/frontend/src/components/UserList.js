import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import $ from "jquery";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5/js/dataTables.bootstrap5.min";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const tableRef = useRef();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users/");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      // Check if DataTables is already initialized
      if (!$.fn.DataTable.isDataTable("#userTable")) {
        // Initialize DataTables after tasks have been loaded
        $(tableRef.current).DataTable({
          order: [[1, "asc"]], // Initial sorting by the second column (Task Title)
        });
      }
    }
  }, [users]);

  return (
    <div>
      <h2>Task List</h2>
      <table ref={tableRef} id="userTable" class="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr scope="row" key={user.id}>
              <th>{user.id}</th>
              <th>{user.username}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
