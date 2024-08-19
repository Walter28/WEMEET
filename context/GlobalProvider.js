import { useState } from "react";
import { useEffect } from "react";
import { Children } from "react";
import { useContext } from "react";
import { createContext } from "react";

import { getCurrentUser } from '../lib/appwrite'


const GlobalContext = createContext();
export const useGlobalcontext = () => useContext(GlobalContext)

const GlobalProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCurrentUser()
            .then((res) => {
                if(res) {
                    setIsLoggedIn(true)
                    setUser(res)
                    console.log("++++++++++++++++++++++++++++++++++++++++++++++ user : "+res)
                } else {
                    setIsLoggedIn(false)
                    setUser(null)
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return (
        <GlobalContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                user,
                setUser,
                isLoading
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider