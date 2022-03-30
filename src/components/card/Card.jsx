import styles from "./Card.module.scss";
import classNames from "classnames";
import { Button, CardContent, Card as CardComp, Typography, Chip } from "@mui/material";

export default function Card({ iconUrl, outlined = false, onClick, title, variant = 'off', id }) {

    const variants = {
        "on": "card_on",
        "off": "card_off",
        "offline": "card_offline",
    }

    return (
        <div id={id} className={classNames(styles[variants[variant]], styles.card, outlined ? styles.outlined : null)}>
            <Button variant="text" className={classNames(styles.button)} onClick={onClick}>
                <CardComp className={classNames(styles.wrapper)}>
                    <CardContent>
                        {iconUrl
                            ? <img src={iconUrl} alt="icon" className={classNames(styles.card_icon)} />
                            : null}
                        {title ? <Typography className={classNames(styles.card_title)}>{title}</Typography> : null}
                        <Chip label="!" className={classNames(styles.card_chip, variant !== "offline" ? styles.chip_hidden : null)} />
                    </CardContent>
                </CardComp>
            </Button>
        </div>
    )
}