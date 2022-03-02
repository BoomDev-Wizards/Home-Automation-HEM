import styles from "./Devices.module.scss";
import classNames from "classnames";
import { Grid } from "@mui/material";
import Card from "../card/Card";

export default function Devices({ devices }) {
    return (
        <div className={classNames(styles["devices-wrapper"])}>
            <Grid container spacing={2}>
                {devices.map((el, index) => {
                    return (
                        <Grid item key={index} xs={4}>
                            <Card iconUrl={el.iconUrl} title={el.title} variant={el.title} />
                        </Grid>
                    )
                })}
                <Grid item xs={4}>
                    <Card iconUrl={'/images/plus.svg'} variant={'off'} outlined={true} />
                </Grid>
            </Grid>
        </div>
    )
}