import styles from "./Weather.module.scss";
import classNames from "classnames";
import { Typography, Grid } from "@mui/material";

export default function Weather({ degrees, type }) {
    return (
        <div className={classNames(styles["weather-wrapper"])}>
            <Grid container spacing={2} className={classNames(styles["grid-container"])}>
                <Grid item>
                    <img src={`/images/${type}.svg`} alt={type} className={classNames(styles["image"])} />
                </Grid>
                <Grid item>
                    <Typography variant="body" className={classNames(styles["title"])} >
                        Weather
                    </Typography>
                    <Typography variant="h1" className={classNames(styles["degrees"])} >
                        {degrees}&deg;
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}
