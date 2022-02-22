import * as React from "react";
import styles from "./LoginPage.module.scss";
import classNames from "classnames";
import { Container, Paper } from "@mui/material";
import Login from "../../src/components/login/Login";
import Weather from "../../src/components/weather/Weather";
import User from "../../src/components/user/User";
import Time from "../../src/components/time/Time";

export default function LoginPage() {
  return (
    <div className={classNames(styles["wrapper"])}>
      <Paper className={classNames(styles["paper"])}>
        <Container className={classNames(styles["container"])}>
          <Login />
        </Container>

        {/* --- REMOVE THE COMPONENTS BELOW --- */}
        <br />
        <User name="John Doe" avatar="https://i.pravatar.cc/150?img=52" size={60} />
        <br />
        <Weather degrees={22} type="sunny" />
        <br />
        <Time />
        <br />
        {/* --- --- */}

      </Paper>
    </div>
  );
}
