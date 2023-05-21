import { createContext } from "react";
import { useState } from "react";
import getInitialState from "./myContext"

const contextState = createContext([{},()=>{}]);

export default function ContextProvider ({children}){

    const [context,setContext] = useState(getInitialState());

    const setDarkMode = (darkMode) => {
        setContext({...context, ['darkMode']: darkMode })
    }
    return(
        <>
            <contextState.Provider value={{ darkMode: context.darkMode, setDarkmode: setDarkMode, isLoggedIn: context.isLoggedIn, language: context.language } }>
                { children }
            </contextState.Provider>
        </>
    );
}
export { contextState };