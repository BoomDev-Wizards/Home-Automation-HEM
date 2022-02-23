import * as React from "react";
import styles from "./LoginPage.module.scss";
import classNames from "classnames";
import { Container, Paper } from "@mui/material";
import Login from "../../src/components/login/Login";

export default function LoginPage() {
  return (
    <div className={classNames(styles["wrapper"])}>
      <Paper className={classNames(styles["paper"])}>
        <Container className={classNames(styles["container"])}>
          <Login />
        </Container>
      </Paper>
    </div>
  );
}
