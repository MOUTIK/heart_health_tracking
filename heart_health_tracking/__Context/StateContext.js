import { createContext, useContext, useEffect, useState } from "react"

const Context = createContext()

export const StateContext = ({children}) => {
    const [Current_language,setCurrent_language] = useState('EN')
    useEffect(() => {

    },[Current_language])
    return(
        <Context.Provider
            value={{
                Current_language,setCurrent_language
            }}
        >
            {children}
        </Context.Provider>
    )
}
export const useStateContext = () => useContext(Context)