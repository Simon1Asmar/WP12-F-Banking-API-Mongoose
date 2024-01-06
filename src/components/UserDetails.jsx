import React from 'react'
import CreateUserForm from './CreateUserForm/CreateUserForm'
import UserTable from './UserTable/UserTable'

const UserDetails = () => {
  return (
    <main>
      <CreateUserForm/>
      <UserTable/>
    </main>
  )
}

export default UserDetails