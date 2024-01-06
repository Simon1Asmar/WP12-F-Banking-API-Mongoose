import React from 'react'
import TransactionForm from './TransactionForm/TransactionForm'
import DepositCashForm from './DepositCashForm/DepositCashForm'

const Transactions = () => {
  return (
    <main>
      <TransactionForm/>
      <DepositCashForm/>
    </main>
  )
}

export default Transactions