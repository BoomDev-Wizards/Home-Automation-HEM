import styles from "./SceneComposer.module.scss";
import classNames from "classnames";
import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import Scenes from "./Scenes";

export default function SceneComposer({ devices, rooms, selected, onScene }) {

    const [currentRoom, setCurrentRoom] = useState(rooms[0]);

    return (
        <div className={classNames(styles["composer-container"])}>
            <Grid container direction='column'>
            {rooms.map((el, index) => {
                const roomDevices = devices.filter(device => device.roomId == el.id);
                if (roomDevices.length > 0) {
                    return (
                        <Grid item key={index}>
                            <Typography variant="h4" className={classNames(styles["room-title"])}>{el.name}</Typography>
                            <Scenes cards={roomDevices} selected={selected} />
                        </Grid>
                    )
                }
            })}
            </Grid>
        </div>
    )
}