import * as React from "react";
import styles from "./LoginPage.module.scss";
import classNames from "classnames";
import { Container, Paper } from "@mui/material";
import Login from "../../src/components/login/Login";
import Weather from "../../src/components/weather/Weather";
import User from "../../src/components/user/User";
import Time from "../../src/components/time/Time";
import Header from "../../src/components/header/Header";

export default function LoginPage() {
  return (
    // <div className={classNames(styles["wrapper"])}>
    //   <Paper className={classNames(styles["paper"])}>
    //     <Container className={classNames(styles["container"])}>
    //       <Login />
    //     </Container>
    //   </Paper>
    // </div>
    <Header 
      left={<User name="John Doe" avatar="/images/avatar.png" size={114} hasWelcome={true} headingSize="h1"/>}
      right={[<Weather degrees={22} type="cloudy" />, <Time />]}
    />
  );
}
