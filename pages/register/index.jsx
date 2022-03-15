import * as React from "react";
import styles from "./RegisterPage.module.scss";
import classNames from "classnames";
import { Container, Paper } from "@mui/material";
import Register from "../../src/components/register/Register";

export default function RegisterPage() {
  return (
    <div className={classNames(styles["wrapper"])}>
      <Paper className={classNames(styles["paper"])}>
        <Container className={classNames(styles["container"])}>
          <Register />
        </Container>
      </Paper>
    </div>
  );
}