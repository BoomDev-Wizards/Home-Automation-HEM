import { useState } from "react";
import styles from "./Cameras.module.scss";
import classNames from "classnames";
import { dividerClasses, Grid } from "@mui/material";
import Card from "../../components/card/Card";

export default function Cameras({ cameras = [], hasButton = false }) {

    const [videoUrl, setVideoUrl] = useState(cameras[0].videoUrl);

    return (
        <div className={classNames(styles["cameras-container"])} >
            <Grid container spacing={2} alignItems='shrink'>
                <Grid item xs={8}>
                    <video width="800" controls muted autoPlay loop className={classNames(styles["visible"])} key={videoUrl} >
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support HTML video.
                    </video>
                </Grid>
                <Grid item xs={4}>
                    <div className={classNames(styles["camera-list"])}>
                        {cameras.map((camera, key) => (
                            <div key={key} className={classNames(styles["grid-item"])} onClick={(ev) => setVideoUrl(camera.videoUrl)}>
                                <video key={key} width="320" muted className={classNames(camera.videoUrl == videoUrl ? styles.border : null)}>
                                    <source src={camera.videoUrl} type="video/mp4" />
                                </video>
                            </div>
                        ))}
                    </div>
                    {hasButton &&
                        <div>
                            <Card iconUrl={"/images/plus.svg"} outlined={true}/>
                        </div>
                    }
                </Grid>
            </Grid>
        </div>
    )
}
