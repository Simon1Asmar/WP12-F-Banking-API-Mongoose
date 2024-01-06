import React from 'react'
import { useBankingContext } from '../../contexts/BankingContext'

const CreateUserForm = () => {

  const {createNewUser} = useBankingContext();

  const createFormSubmitted = (e) => {
    e.preventDefault();

    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const passportNumber = e.target.elements.passportNumber.value;

    const newUserData = {
      firstName: firstName,
      lastName: lastName,
      passportNumber: passportNumber,
    }
    
    createNewUser(newUserData)
    .then(() => {
      e.target.reset();
    })
  }

  return (
    <section>
      <h2>Create New User</h2>
      <form onSubmit={createFormSubmitted}>

        <label htmlFor="firstName">
          First Name:
          <input type="text" name="firstName" id="firstName" required/>
        </label>

        <label htmlFor="lastName">
          Last Name:
          <input type="text" name="lastName" id="lastName" required/>
        </label>

        <label htmlFor="passportNumber">
          Passport Number:
          <input type="number" name="passportNumber" id="passportNumber" required/>
        </label>

        <button type="submit">Create</button>

      </form>
    </section>
  )
}

export default CreateUserForm