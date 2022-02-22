import styles from "./User.module.scss";
import classNames from "classnames";
import { Grid, Container, Avatar, Typography } from "@mui/material";

export default function User({ avatar, name, size }) {
    return (
        <div className={classNames(styles["user-container"])}>
            <Container>
                <Grid container spacing={2} className={classNames(styles["grid-container"])}>
                    <Grid item>
                        <Avatar alt={name} src={avatar} sx={{ width: size, height: size }} />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" className={classNames(styles.title)} >
                            {name}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
