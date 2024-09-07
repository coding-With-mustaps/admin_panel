import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
    switch(action.type){
        case "LIGHT":
            return { theme: "light"}
        case "DARK":
            return { theme: "dark"}
        default:
            return state

    }
};


export const ThemeContextProvider = ({children}) => {
    const [theme, dispatch] = useReducer(themeReducer, {
        theme: localStorage.getItem("theme") === "dark" ? "dark" : "light"
    });

    console.log(theme);

    return (
        <ThemeContext.Provider value={{...theme, dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
};

