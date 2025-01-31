import { createContext, useState } from 'react'
import run from '../config/gemini'


// wrap in createContext
export const Context = createContext()

const ContextProvider = (props) => {
    // creating states
    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPrompt, setPrevPrompt] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")
    const [signedIn, setSignedIn] = useState(false)

   
    const newChat =()=>{
        setLoading(false)
        setShowResult(false)
    }


    const onSent = async (prompt) => {
        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response

        if (prompt !== undefined) {
            response = await run(prompt)
            setRecentPrompt(prompt)
        }
        else {
            setPrevPrompt((prev) => [...prev, input])
            setRecentPrompt(input)
            response = await run(input)

        }





        let responseArray = response.split('**')
        let newResponse = ""

        for (let i = 0; i < responseArray.length; i++) {
            if (i == 0 || i % 2 !== 1) {
                newResponse += responseArray[i]
            }
            else {
                newResponse += "<strong>" + responseArray[i] + "</strong>"
            }
        }

        let newResponse2 = newResponse.split('*').join('</br>')
        let newResponseArray = newResponse2.split(" ")

        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i]
            delayPara(i, nextWord + " ")
        }



        setLoading(false)
        setInput("")

    }



    const contextValue = {
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompt,
        setPrevPrompt,
        showResult,
        loading,
        resultData,
        onSent,
        newChat,

    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider