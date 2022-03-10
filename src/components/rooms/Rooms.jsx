import styles from "./Rooms.module.scss";
import classNames from "classnames";
import { Grid } from "@mui/material";
import Card from "../card/Card";

export default function Rooms({rooms}) {
    return (
        <div className={classNames(styles["rooms-wrapper"])}>
            <Grid container spacing={2}>
                {rooms.map((el, index) => {
                    return (
                        <Grid item key={index} xs={2}>
                            <Card iconUrl={'/images/bed.svg'} title={el.name} />
                        </Grid>
                    )
                })}
                <Grid item xs={2}>
                    <Card className={classNames(styles["rooms-add"])} 
                    iconUrl={'/images/outlined-plus.svg'} 
                    title={"add room"} outlined={true} />
                </Grid>
            </Grid>
        </div>
    )
}