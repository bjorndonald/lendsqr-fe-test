import React, { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { STORAGE_KEY } from "../constants/strings"
import { getUsers } from "../queries/user"
import { UserType } from "../types/user"

const AppContext = createContext({
    isMobile: false,
    menuIsOpen: false,
    setMenuIsOpen: (bool: boolean) => { },
})

type Props = {
    children: ReactNode
}

const AppContextProvider = ({ children }: Props) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const isMobile = window.innerWidth < 768

    return <AppContext.Provider
        value={{
            isMobile,
            menuIsOpen,
            setMenuIsOpen
        }}
    >
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    const context = useContext(AppContext)
    if (context === undefined) {
        throw new Error('useAppContext must be used within a AppProvider')
    }
    return context
}

export default AppContextProvider