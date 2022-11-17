import React, { createContext, useState } from "react";
import DisplayLanguage from "./DisplayLanguage";

export const LanguageContext = createContext("en")

export default function Language() {

    const [language, setLanguage] = useState("en")

    function handleLanguage(e) {
        setLanguage(e.target.value) 
    }

        return(
            <>
                <LanguageContext.Provider value={language}>
                    <DisplayLanguage />
                </LanguageContext.Provider>
                <select value={language} onChange={handleLanguage}>
                    <option value="en">
                        English
                    </option>
                    <option value="it">
                        Italiano
                    </option>
                </select>
            </>
        )
    }
