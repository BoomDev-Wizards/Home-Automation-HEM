import styles from "./Room.module.scss";
import classNames from "classnames";
import { Fragment } from "react";
import { Container, Grid, Typography } from "@mui/material";
import Header from "../../src/components/header/Header";
import Devices from "../../src/components/devices/Devices";
import Cameras from "../../src/components/cameras/Cameras";
import Navigation from "../../src/components/navigation/Navigation";

export default function Room() {

    const cameras = {
        "cameras": [
            { "videoUrl": "/cameras/balcony.mp4" },
            { "videoUrl": "/cameras/bathroom.mp4" },
            { "videoUrl": "/cameras/front-door.mp4" },
            { "videoUrl": "/cameras/garden.mp4" },
            { "videoUrl": "/cameras/kitchen.mp4" },
            { "videoUrl": "/cameras/living room 2.mp4" },
        ],
        "hasButton": false
    }

    const devicesArr = [
        { "title": "on", "iconUrl": "/images/bulb.svg" },
        { "title": "off", "iconUrl": "/images/bulb.svg" },
        { "title": "off", "iconUrl": "/images/plug.svg" },
        { "title": "off", "iconUrl": "/images/plug.svg" },
        { "title": "offline", "iconUrl": "/images/plug.svg" },
    ]

    return (
        <Fragment>
            <Navigation />
            <main className={classNames(styles["wrapper"])}>
                <div className={classNames(styles["hero_line"])}></div>
                <Container className={classNames(styles["container"])} maxWidth={false}>
                    <Grid container spacing={2} alignItems={'stretch'}>
                        <Grid item xs={12}>
                            <Header className={classNames(styles.head)}
                                left={
                                    <Typography variant="h2" className={classNames(styles.room)}>Living Room</Typography>
                                }
                                right={<div className={classNames(styles["right_head"])}>
                                    <Typography className={classNames(styles["dev_head"])}>Devices</Typography>
                                    <Typography variant="h2"
                                        className={classNames(styles["room_count"])}
                                    >{devicesArr.filter(el=>el.title!='offline').length}</Typography>
                                </div>}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h4" className={classNames(styles["comp_name"])}>Devices</Typography>
                            <Devices devices={devicesArr} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h4" className={classNames(styles["comp_name"])}>Cameras</Typography>
                            <Cameras cameras={cameras.cameras} hasButton={cameras.hasButton} />
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </Fragment>
    )
}