import { useState } from "react";
import styles from "./Cameras.module.scss";
import classNames from "classnames";
import { Grid } from "@mui/material";
import Card from "../../components/card/Card";

export default function Cameras({ cameras = [], hasButton = false }) {
    const [videoUrl, setVideoUrl] = useState("/cameras/balcony.mp4");

    const startCamera = (newVideoUrl) => {
        setVideoUrl(newVideoUrl);
    }
    return (
        <div className={classNames(styles["cameras-container"])} >
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <video width="800" controls autoPlay muted className={classNames(styles["video"])} >
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support HTML video.
                    </video>
                </Grid>
                <Grid item xs={4}>
                    <Grid container spacing={1}>
                        {cameras.map((camera, key) => (
                            <Grid key={key} item xs={6} className={classNames(styles["grid-item"])}>
                                <Card iconUrl={"https://via.placeholder.com/300x250"} onClick={startCamera} onClickAttr={camera.videoUrl} />
                            </Grid>
                        ))}
                        {hasButton &&
                            <Grid item xs={12}>
                                <Card iconUrl={"/images/plus.svg"} outlined={true} />
                            </Grid>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
