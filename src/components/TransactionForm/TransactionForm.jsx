import React from "react";
import { useBankingContext } from "../../contexts/BankingContext";

const TransactionForm = () => {
  const { users, transactMoney } = useBankingContext();

  const handleTransact = (e) => {
    e.preventDefault();

    const fromUserId = e.target.elements.fromUser.value;
    const toUserId = e.target.elements.toUser.value;
    const cash = parseFloat(e.target.elements.amount.value);

    transactMoney(fromUserId, toUserId, cash).then(() => {
      e.target.elements.amount.value = "";
    });


  }

  return (
    <section className="form-container">
      <h2>Transaction</h2>
      <form onSubmit={handleTransact}>
        <label htmlFor="fromUser">
          From:
          <select name="fromUser" id="fromUser">
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.firstName} {user.lastName} ({user._id})
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="toUser">
          To:
          <select name="toUser" id="toUser">
            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.firstName} {user.lastName} ({user._id})
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="amount">
          $
          <input type="number" name="amount" id="amount" min={0} required />
        </label>

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default TransactionForm;
