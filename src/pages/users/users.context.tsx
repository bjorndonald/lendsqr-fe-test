import React, { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { getUsers } from "../../queries/user";
import { UserType } from "../../types/user";

export enum TabEnum {
    GENERAL,
    DOCUMENTS,
    BANK, LOANS, SAVINGS, SYSTEM
}

const UsersContext = createContext({

})

type Props = {
    children?: React.ReactNode;
};

const UsersContextProvider = ({ children }: Props) => {

    useEffect(() => {

        return () => {

        }
    }, [])


    return <UsersContext.Provider
        value={{

        }}
    >
        {children}
    </UsersContext.Provider>
}

export const useUsersContext = () => {
    const context = useContext(UsersContext)
    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserProvider')
    }
    return context
}

export default UsersContextProvider