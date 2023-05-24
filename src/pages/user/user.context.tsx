import React, { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getUser } from "../../queries/user";
import { UserType } from "../../types/user";

export enum TabEnum {
    GENERAL,
    DOCUMENTS,
    BANK, LOANS, SAVINGS, SYSTEM
}

const UserContext = createContext({
    tab: TabEnum.GENERAL,
    setTab: (tab: TabEnum) => { },
    user: {} as UserType | undefined
})

type Props = {
    children?: React.ReactNode;
};

const UserContextProvider = ({ children }: Props) => {
    const [tab, setTab] = useState<TabEnum>(TabEnum.GENERAL);
    const [user, setUser] = useState<UserType>()
    const { id } = useParams()


    useEffect(() => {

        getUser(id).then((res: any) => {
            setUser(res.data)
        }).catch(error => {
        })

        return () => {

        }
    }, [])

    return <UserContext.Provider
        value={{
            tab, setTab, user
        }}
    >
        {children}
    </UserContext.Provider>
}

export const useUserContext = () => {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserProvider')
    }
    return context
}

export default UserContextProvider