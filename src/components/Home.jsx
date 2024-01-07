import React from 'react'
import { useState, useEffect } from 'react';

import { useBankingContext } from '../contexts/BankingContext';

const Home = () => {
  const {fetchAllUsers, users} = useBankingContext(); 

  // useEffect(()=>{
  //   console.log("RE-RENDER");
  // },[users])

  return (
    <section className='page-section'>
      <button onClick={fetchAllUsers}>Fetch all users</button>
      {users.map((user)=>(
        <p key={user._id}>{user.firstName}</p>
      ))}
    </section>
  )
}

export default Home