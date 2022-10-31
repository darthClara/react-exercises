import React, { createContext } from "react";
import { DisplayLanguage } from "./DisplayLanguage";

export const LanguageContext = createContext("en")

export class Language extends React.Component{

    state = {
        language: "en",
    }

    handleLanguage = (e) => {
        this.setState({
           language: e.target.value
        }) 
    }

    render() {
        return(
            <>
                <LanguageContext.Provider value={this.state.language}>
                    <DisplayLanguage />
                </LanguageContext.Provider>
                <select value={this.state.language} onChange={this.handleLanguage}>
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
}