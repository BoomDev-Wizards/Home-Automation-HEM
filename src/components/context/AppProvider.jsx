import { createContext } from "react"

export default function AppProvider({ children }) {

    const AppContext = createContext({
        refresh: () => { },
        rooms: [],
        devices: [],
        thermostats: [],
        properties: [],
        scenes: []
    });

    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}