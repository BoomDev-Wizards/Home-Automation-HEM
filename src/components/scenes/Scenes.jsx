import styles from "./Scenes.module.scss";
import classNames from "classnames";
import { Grid } from "@mui/material";
import Card from "../../components/card/Card";
import { Fragment, useState } from "react";

export default function Scenes({ cards = [], selected, hasButton = false, onButtonClick, onCardClick }) {

    const [selectedCard, setSelectedCard] = useState(selected);

    return (
        <div className={classNames(styles["scenes-container"])} >
            <Grid container spacing={2}>
                {cards.map((card, key) => (
                    <Fragment key={key}>
                        <Grid item xs={4}>
                            <Card
                                id={card.id}
                                iconUrl={card.iconUrl}
                                variant={card.variant}
                                title={card.title}
                                outlined={selectedCard && selectedCard.id == card.id}
                                onClick={onCardClick ? onCardClick : () => setSelectedCard(card)} />
                        </Grid>
                    </Fragment>
                ))}
                {hasButton ?
                    <Grid item xs={4}>
                        <Card iconUrl={'/images/plus.svg'} outlined={true} onClick={onButtonClick} />
                    </Grid>
                    : null}
            </Grid>
        </div>
    )
}
