import React, { useContext } from "react";
import { Language, LanguageContext } from "./Language";

const Translation = {
    en: {
        Message: "the apple is on the table",
    },
    it: {
        Message: "la mela è sul tavolo",
    }
}

export default function DisplayLanguage() {
    const language = useContext(LanguageContext)
        return(
            <>
                <LanguageContext.Consumer>
                    {Language => {
                        return (
                            <h1>{Translation[Language].Message}</h1>
                        )
                    }}
                </LanguageContext.Consumer>
            </>
        )
    }
