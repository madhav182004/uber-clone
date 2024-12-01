import React, { createContext, useState } from 'react'

export const UserDataContext = createContext();

const UserContext = ({children}) => {

    const [user, setUser] = useState({
        email: '',
        fullName: {
            firstname:'',
            lastname:''
        }
    })

  return (
    <div>
        <UserDataContext.Provider>
            {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext;