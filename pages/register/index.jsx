import styles from "./RegisterPage.module.scss";
import classNames from "classnames";
import { Container, Paper } from "@mui/material";
import Register from "../../src/components/register/Register";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";

export default function RegisterPage() {

  const router = useRouter();

  const [errors,setErrors] = useState({})

  async function onSubmit(userData) {
      const result = await fetch('https://hem-api.herokuapp.com/register',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });
      const data = await result.json();
      if(result.status!==200 && result.status!==201){
        setErrors(data);
      }else{
        localStorage.setItem('accessToken', data.accessToken);
        router.push('/')
      }
  }

  return (
    <div className={classNames(styles["wrapper"])}>
      <Paper className={classNames(styles["paper"])}>
        <Container className={classNames(styles["container"])}>
          <Register onSubmit={onSubmit} err={errors}/>
        </Container>
      </Paper>
          <p>Already registered? <a href="/login">Go to login.</a></p>
    </div>
  );
}