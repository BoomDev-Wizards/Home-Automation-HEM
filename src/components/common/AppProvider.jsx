import { createContext, useState, useEffect } from "react"

export const AppContext = createContext({
    refresh: () => { },
    rooms: [],
    devices: [],
    thermostats: [],
    properties: [],
    scenes: []
});

export default function AppProvider({ children }) {

    let token
    if (typeof window !== 'undefined') {
        token = `Bearer ${localStorage.getItem('accessToken')}`
    }
    const [rooms, getRooms] = useState([]);
    const [devices, getDevices] = useState([]);
    const [thermostats, getThermostats] = useState([]);
    const [properties, getProperties] = useState([]);
    const [scenes, getScenes] = useState([]);

    async function refresh() {
        const [roomsResult, devicesResult, thermostatsResult, propertiesResult, scenesResult] = await Promise.all([
            fetch(process.env.apiUrl + '/rooms', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            }),
            fetch(process.env.apiUrl + '/devices', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            }),
            fetch(process.env.apiUrl + '/thermostats', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            }),
            fetch(process.env.apiUrl + '/properties', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            }),
            fetch(process.env.apiUrl + '/scenes', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            })
        ]);

        const [
            roomsData, 
            devicesData, 
            thermostatsData, 
            propertiesData, 
            scenesData] = await Promise.all([
            roomsResult.json(),
            devicesResult.json(),
            thermostatsResult.json(),
            propertiesResult.json(),
            scenesResult.json()
        ])
        getRooms(roomsData);
        getDevices(devicesData);
        getThermostats(thermostatsData);
        getProperties(propertiesData);
        getScenes(scenesData);
    }

    useEffect(() => {
        if(localStorage.getItem('accessToken')){
            refresh();
        }
    }, [token])


    return (
        <AppContext.Provider value={{
            rooms: rooms,
            devices: devices,
            thermostats: thermostats,
            properties: properties,
            scenes: scenes,
        }}>
            {children}
        </AppContext.Provider>
    )
}