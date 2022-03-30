import styles from "./Room.module.scss";
import classNames from "classnames";
import { Fragment, useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import Header from "../../../src/components/header/Header";
import Devices from "../../../src/components/devices/Devices";
import Cameras from "../../../src/components/cameras/Cameras";
import Navigation from "../../../src/components/navigation/Navigation";
import devicesData from "../../../data/devices.json";
import roomData from "../../../data/rooms.json";
import { useRouter } from "next/router";
import AddDevice from "../../../src/components/devices/AddDevice";

export default function Room() {

    const router = useRouter();
    const { room_name } = router.query;

    let token
    if (typeof window !== 'undefined') {
      token = `Bearer ${localStorage.getItem('accessToken')}`
      if (!localStorage.getItem('accessToken')) {
        router.push("/login");
      }
    }

    const cameras = {
        "cameras": [
            { "videoUrl": "https://static.videezy.com/system/resources/previews/000/017/340/original/Room_In_The_Palace_Of_Iturbide_Mexico_5013e.mp4" },
            { "videoUrl": "https://static.videezy.com/system/resources/previews/000/055/870/original/1newroomjapanese48558899885.mp4" },
            { "videoUrl": "https://static.videezy.com/system/resources/previews/000/051/944/original/0001-0443.mp4" },
            { "videoUrl": "https://static.videezy.com/system/resources/previews/000/053/432/original/1newroomjapanes88888888.mp4" },
            { "videoUrl": "https://static.videezy.com/system/resources/previews/000/035/346/original/005_06.mp4" },
            { "videoUrl": "https://static.videezy.com/system/resources/previews/000/051/948/original/greenroominterior4545121326555899.mp4" },
        ],
        "hasButton": false
    }
    const [devices, setDevices] = useState([]);
    useEffect(() => {
        setDevices(devicesData.devices);
    }, []);

    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        setRooms(roomData.rooms);
    }, [])

    const [addDeviceModule, setAddDeviceModule] = useState(false);
    const [searchDevice, setSearchDevice] = useState(false);
    const [failedDevice, setFailedDevice] = useState(false);
    const [foundDevice, setFoundDevice] = useState(false);

    function startSearch() {
        setAddDeviceModule(true);
        setSearchDevice(true);
        setFailedDevice(false);
        setFoundDevice(false);
        let searchCount = Math.random().toFixed(0)
        console.log(searchCount);
        setTimeout(() => {
            setSearchDevice(false)
            if (searchCount % 2 != 0) {
                setFailedDevice(true);
                setFoundDevice(false);
            } else {
                setFailedDevice(false);
                setFoundDevice(true);
            }
        }, 5000)
    }

    return (
        typeof window !== 'undefined' ? localStorage.getItem('accessToken')?
        <Fragment>
            <Navigation rooms={rooms} />
            {devices != undefined ?
                <main className={classNames(styles["wrapper"])}>
                    <div className={classNames(styles["hero_line"])}></div>
                    <Container className={classNames(styles["container"])} maxWidth={false}>
                        <Grid container spacing={2} alignItems={'stretch'}>
                            <Grid item xs={12}>
                                <Header className={classNames(styles.head)}
                                    left={
                                        <Typography variant="h2" className={classNames(styles.room)}>{room_name}</Typography>
                                    }
                                    right={<div className={classNames(styles["right_head"])}>
                                        <Typography className={classNames(styles["dev_head"])}>Devices</Typography>
                                        <Typography variant="h2"
                                            className={classNames(styles["room_count"])}
                                        >{devices.filter(el => el.title != 'offline').length}</Typography>
                                    </div>}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h4" className={classNames(styles["comp_name"])}>Devices</Typography>
                                <Devices devices={devices} onButtonClick={startSearch} />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h4" className={classNames(styles["comp_name"])}>Cameras</Typography>
                                <Cameras cameras={cameras.cameras} hasButton={cameras.hasButton} />
                            </Grid>
                        </Grid>
                    </Container>
                </main>
                : null}
            <AddDevice
                searching={searchDevice}
                found={failedDevice}
                failed={foundDevice}
                open={addDeviceModule}
                onDevice={devices[0]}
                handleClose={() => setAddDeviceModule(false)}
                onSubmit={() => setAddDeviceModule(false)}
                tryAgain={startSearch}
                />
        </Fragment>
        :null
        :null
    )
}

