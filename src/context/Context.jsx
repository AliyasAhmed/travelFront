import { createContext } from "react";
import run from "../config/gemini";

export const context = createContext()

const ContextProvider = (props)=>{
    const onSent = async (prompt) =>{
        await run(prompt)
    }

    onSent("where is srinagar")

    const contextValue= {}

    return (
        <contextProvider value={contextValue}>
            {props.children}
        </contextProvider>

    )
}

export default ContextProvider