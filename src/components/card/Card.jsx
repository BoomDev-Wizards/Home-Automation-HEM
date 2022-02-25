import styles from "./Card.module.scss";
import classNames from "classnames";
import { Button, CardContent, Card as CardComp } from "@mui/material";

export default function Card({ iconUrl, outlined = false, onClick }) {
    return (
        <div className={classNames(styles.card, outlined?styles.outlined:null)}>
            <Button variant="text" className={classNames(styles.button)} onClick={onClick}>
                <CardComp className={classNames(styles.wrapper)}>
                    <CardContent>
                        {iconUrl
                            ? <img src={iconUrl} alt="icon" />
                            : null}
                    </CardContent>
                </CardComp>
            </Button>
        </div>
    )
}