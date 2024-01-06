import React from "react";
import { useBankingContext } from "../../contexts/BankingContext";

const DepositCashForm = () => {
  const { users, depositMoney } = useBankingContext();

  const handleDeposit = (e) => {
    e.preventDefault();

    const userId = e.target.elements.userToDeposit.value;
    const cash = parseFloat(e.target.elements.depositAmount.value);

    depositMoney(userId, cash).then(() => {
      e.target.elements.depositAmount.value = "";
    });
  };

  return (
    <section>
      <h2>Deposit Cash</h2>
      <form onSubmit={handleDeposit}>
        <select name="userToDeposit" id="userToDeposit">
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.firstName} {user.lastName} ({user._id})
            </option>
          ))}
        </select>

        <label htmlFor="depositAmount">
          $
          <input
            type="number"
            name="depositAmount"
            id="depositAmount"
            min={0}
            required
          />
        </label>

        <button type="submit">Deposit</button>
      </form>
    </section>
  );
};

export default DepositCashForm;
