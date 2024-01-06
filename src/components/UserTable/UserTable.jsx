import React from "react";
import { useBankingContext } from "../../contexts/BankingContext";

const UserTable = () => {
  const { users, deleteUser, updateUserStatus } = useBankingContext();

  const handleDeleteUser = (userId) => {
    // Call the deleteUser function from the context
    deleteUser(userId);
  };

  const handleStatusChange = (userId, currentActiveValue) => {
    updateUserStatus(userId, !currentActiveValue);
  }

  return (
    <div>
      <h2>User Table</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Passport Number</th>
            <th>Cash</th>
            <th>Credit</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.passportNumber}</td>
              <td>{user.cash}</td>
              <td>{user.credit}</td>
              <td>{user.isActive ? "Yes" : "No"}</td>
              <td>
                <button onClick={() => handleDeleteUser(user._id)}>
                  Delete
                </button>
                <button onClick={() => handleStatusChange(user._id, user.isActive)}>
                  {user.isActive ? "Deactivate" : "Activate"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
