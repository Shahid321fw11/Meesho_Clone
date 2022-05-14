import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {

    const [serchValue, setSearchValue] = useState("");
    const setSearch_2 = (value) => {
        setSearchValue(value);
    };

    return (
        <AppContext.Provider value={{ serchValue, setSearch_2 }}>
            {children}
        </AppContext.Provider>
    )
}