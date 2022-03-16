import styles from "./Login.module.scss";
import classNames from "classnames";
import { Alert, Button, InputAdornment, Snackbar, TextField } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useEffect, useState } from "react";

export default function Login({onSubmit,err}) {

    const [userData,setUserData] = useState({})
    const [errorState,setErrorState] = useState(false)
    const [errorMessage,setErrorMessage] = useState();

    useEffect(()=>{
        if(typeof err=='string'){
            setErrorMessage(err);
            setErrorState(true);
        }
    },[err,userData])

    function handleClose(event, reason){
        if (reason === 'clickaway') {
          return;
        }
        setErrorState(false);
      };

    return (
        <div className={classNames(styles["login-form"])}>
            <TextField
                fullWidth
                type="email"
                variant="standard"
                placeholder="Email"
                onChange={(ev)=>setUserData(Object.assign(userData,{email:ev.target.value.trim()}))}
                className={classNames(styles["input-field"])}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <EmailIcon />
                        </InputAdornment>
                    )
                }}
            />
            <TextField
                fullWidth
                type="password"
                variant="standard"
                placeholder="Password"
                id="pass"
                onChange={(ev)=>setUserData(Object.assign(userData,{password:ev.target.value.trim()}))}
                className={classNames(styles["input-field"])}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LockIcon />
                        </InputAdornment>
                    )
                }}
            />
            <Button
                fullWidth
                variant="contained"
                className={classNames(styles["button"])}
                onClick={()=>{
                    document.getElementById('pass').value = '';
                    onSubmit(userData);
                }}
            >
                Login
                <Snackbar open={errorState} autoHideDuration={5000} onClose={handleClose}>
                    <Alert severity="error" onClose={handleClose}>{errorMessage}</Alert>
                </Snackbar>
            </Button>
        </div>
    )
}
