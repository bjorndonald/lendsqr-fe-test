import React, { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { getUsers } from "../../queries/user";
import { UserType } from "../../types/user";

export enum TabEnum {
    GENERAL,
    DOCUMENTS,
    BANK, LOANS, SAVINGS, SYSTEM
}

const UsersContext = createContext({
    tab: TabEnum.GENERAL,
    setTab: (tab: TabEnum) => { },
    users: [{}] as UserType[]
})

type Props = {
    children?: React.ReactNode;
};

const UsersContextProvider = ({ children }: Props) => {
    const [tab, setTab] = useState<TabEnum>(TabEnum.GENERAL);
    const [users, setUsers] = useState<UserType[]>([])

    useEffect(() => {
        getUsers().then((res: any) => {
            setUsers(res.data)
        }).catch(error => {
        })
        return () => {

        }
    }, [])


    return <UsersContext.Provider
        value={{
            tab, setTab, users
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