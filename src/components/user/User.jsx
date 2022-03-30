import styles from "./User.module.scss";
import classNames from "classnames";
import { Grid, Container, Avatar, Typography } from "@mui/material";

export default function User({ avatar, name, size, headingSize = "h6", hasWelcome = false }) {
    return (
        <div className={classNames(styles["user-container"])}>
            <Container>
                <Grid container spacing={2} className={classNames(styles["grid-container"])}>
                    <Grid item>
                        <Avatar alt={name} src={avatar} sx={{ width: size, height: size }} />
                    </Grid>
                    <Grid item className={classNames(styles.username)}>
                        {hasWelcome ?
                            <Typography className={classNames(styles.welcome)}>Welcome back,</Typography>
                            : null}
                        <Typography variant={headingSize} >
                            {name}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
