import React, { createContext, ReactNode, useContext } from "react"

const AppContext = createContext({})

type Props = {
    children: ReactNode
}


const AppContextProvider = ({ children }: Props) => {
    return <AppContext.Provider
        value={{

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