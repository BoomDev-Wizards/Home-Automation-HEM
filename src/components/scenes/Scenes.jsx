import styles from "./Scenes.module.scss";
import classNames from "classnames";
import { Grid } from "@mui/material";
import Card from "../../components/card/Card";
import { Fragment } from "react";

export default function Scenes({ cards = [], selected }) {
    return (
        <div className={classNames(styles["scenes-container"])} >
            <Grid container spacing={2}>
                {cards.map((card, key) => (
                    <Fragment key={key}>
                    <Grid item xs={4}>
                        <Card iconUrl={card.iconUrl} variant='on' title='on' outlined={selected && selected.id==card.id}/>
                    </Grid>
                    {/* <Grid item xs={4}>
                        <Card iconUrl={card.iconUrl} variant='off' title='off' outlined={selected && selected.id==card.id}/>
                    </Grid> */}
                    </Fragment>
                ))}
                {/* <Grid item xs={4}>
                    <Card iconUrl={'/images/plus.svg'} outlined={true}/>
                </Grid> */}
            </Grid>
        </div>
    )
}
