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
          { "videoUrl": "https://static.videezy.com/system/resources/previews/000/017/340/original/Room_In_The_Palace_Of_Iturbide_Mexico_5013e.mp4" },
          { "videoUrl": "https://static.videezy.com/system/resources/previews/000/055/870/original/1newroomjapanese48558899885.mp4" },
          { "videoUrl": "https://static.videezy.com/system/resources/previews/000/051/944/original/0001-0443.mp4" },
          { "videoUrl": "https://static.videezy.com/system/resources/previews/000/053/432/original/1newroomjapanes88888888.mp4" },
          { "videoUrl": "https://static.videezy.com/system/resources/previews/000/035/346/original/005_06.mp4" },
          { "videoUrl": "https://static.videezy.com/system/resources/previews/000/051/948/original/greenroominterior4545121326555899.mp4" },
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
                                    >{devicesArr.filter(el => el.title != 'offline').length}</Typography>
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
