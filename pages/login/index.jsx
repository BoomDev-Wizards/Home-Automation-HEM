import styles from "./LoginPage.module.scss";
import classNames from "classnames";
import { Container, Paper } from "@mui/material";
import Login from "../../src/components/login/Login";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";

export default function LoginPage() {

  const router = useRouter();

  const [errors,setErrors] = useState({})

  async function onSubmit(userData) {
      const result = await fetch('https://hem-api.herokuapp.com/login',{
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
        localStorage.setItem('accessToken',data.accessToken);
        router.push('/')
      }
  }



  return (
    <div className={classNames(styles["wrapper"])}>
      <Paper className={classNames(styles["paper"])}>
        <Container className={classNames(styles["container"])}>
          <Login onSubmit={onSubmit} err={errors}/>
        </Container>
      </Paper>
    </div>
  );
}
