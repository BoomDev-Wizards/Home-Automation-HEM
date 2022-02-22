import { useEffect, useState } from 'react';
import styles from "./Time.module.scss";
import classNames from "classnames";
import { Typography } from "@mui/material";

export default function Time() {
    const [timeNow, setTimeNow] = useState();
    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            if(date.getMinutes()<10){
                setTimeNow(`${date.getHours()}:0${date.getMinutes()}`);
            }else{
                setTimeNow(`${date.getHours()}:${date.getMinutes()}`);
            }
        }, 1000);
    }, []);

    return (
        <div className={classNames(styles["time-wrapper"])}>
            <Typography variant="body" className={classNames(styles["title"])} >
                Time
            </Typography>
            <Typography variant="h1" >
                {timeNow}
            </Typography>
        </div>
    )
}
