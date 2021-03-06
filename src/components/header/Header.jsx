import styles from "./Header.module.scss";
import classNames from "classnames";
import { Paper } from "@mui/material";

export default function Header({left,right}) {
    return(
        <div className={classNames(styles["header-wrapper"])}>
            <Paper elevation={3} className={classNames(styles.paper)}>
                <div className={classNames(styles.left)}>{left}</div>
                <div className={classNames(styles.right)}>{right}</div>
            </Paper>
        </div>
    )
}