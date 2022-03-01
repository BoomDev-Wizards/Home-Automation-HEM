import styles from "./Scenes.module.scss";
import classNames from "classnames";
import { Grid } from "@mui/material";
import Card from "../../components/card/Card";

export default function Scenes({ cards = [], selected }) {
    return (
        <div className={classNames(styles["scenes-container"])} >
            <Grid container spacing={2}>
                {cards.map((card, key) => (
                    <Grid item key={key} xs={4}>
                        <Card iconUrl={card.iconUrl} />
                    </Grid>
                ))}
                <Grid item xs={4}>
                    <Card iconUrl={'/images/plus.svg'} outlined={true}/>
                </Grid>
            </Grid>
        </div>
    )
}
