import React from "react";
import { useState, createContext, useContext, useEffect } from "react";

const BankingContext = createContext();

// useBankingConext Hook
export const useBankingContext = () => {
  return useContext(BankingContext);
};

export const BankingProvider = ({ children }) => {
  // FUNCTIONS & VARIABLES
  const BASE_URL =
    "https://banking-system-api-with-mongo.onrender.com/api/v1/banking/users";

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetchAllUsers();
  },[])

  // Method to fetch all users from the banking api
  const fetchAllUsers = async () => {
    try {
      console.log("FETICHING LOG USERS");

      // GET method to get all users
      const response = await fetch(BASE_URL, {
        method: "GET",
      });

      // Get the data from the response as a json
      const data = await response.json();

      // set the users
      setUsers(data);

      console.log("DONE FETCHING");
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Create new user
  const createNewUser = async (newUserData) => {
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserData),
      });

      // if user created successfully update users array
      if (response.ok) {
        fetchAllUsers();
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`${BASE_URL}/${userId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchAllUsers(); // Update the user list after deleting a user
      } else {
        console.error("Error deleting user:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const depositMoney = async (userId, cash) => {
    try {
      const response = await fetch(`${BASE_URL}/${userId}/deposit`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cash }),
      });

      if (response.ok) {
        fetchAllUsers();
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateUserCredit = async (userId, credit) => {
    try {
      const response = await fetch(`${BASE_URL}/${userId}/credit`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ credit }),
      });

      if (response.ok) {
        fetchAllUsers();
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const transactMoney = async (fromUserId, toUserId, cash) => {
    try {
      const response = await fetch(
        `${BASE_URL}/${fromUserId}/transact/${toUserId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cash }),
        }
      );

      if (response.ok) {
        fetchAllUsers();
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateUserStatus = async (userId, isActive) => {
    try {
      const response = await fetch(`${BASE_URL}/${userId}/active`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isActive }),
      });

      if (response.ok) {
        fetchAllUsers();
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filterByAmountOfCash = async (amount, isGreaterThan, andEqual) => {
    try {
      const response = await fetch(`${BASE_URL}/filter/cash/${amount}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isGreaterThan, andEqual }),
      });

      if (response.ok) {
        const filteredUsers = await response.json();
        console.log(filteredUsers);
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // THINGS WE WANT TO SEND
  const contextValue = {
    users,
    fetchAllUsers,
    createNewUser,
    deleteUser,
    depositMoney,
    updateUserCredit,
    transactMoney,
    updateUserStatus,
    filterByAmountOfCash,
  };

  return (
    <BankingContext.Provider value={contextValue}>
      {children}
    </BankingContext.Provider>
  );
};
