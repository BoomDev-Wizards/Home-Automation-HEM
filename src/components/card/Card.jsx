import styles from "./Card.module.scss";
import classNames from "classnames";
import { Button, CardContent, Card as CardComp, Typography } from "@mui/material";

export default function Card({ iconUrl, outlined = false, onClick, title }) {
    return (
        <div className={classNames(styles.card, outlined ? styles.outlined : null)}>
            <Button variant="text" className={classNames(styles.button)} onClick={onClick}>
                <CardComp className={classNames(styles.wrapper)}>
                    <CardContent>
                        {iconUrl
                            ? <img src={iconUrl} alt="icon" />
                            : null}
                        {title?<Typography className={classNames(styles.card_title)}>{title}</Typography>:null}
                    </CardContent>
                </CardComp>
            </Button>
        </div>
    )
}