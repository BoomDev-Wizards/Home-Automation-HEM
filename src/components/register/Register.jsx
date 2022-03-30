import styles from "./Register.module.scss";
import classNames from "classnames";
import { Alert, Button, InputAdornment, Snackbar, TextField } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useEffect, useState } from "react";

export default function Register({onSubmit,err}) {

    const [userData,setUserData] = useState({});
    const [errorState,setErrorState] = useState(false);
    const [errorMessage,setErrorMessage] = useState();

    useEffect(()=>{
        if(typeof err=='string'){
            setErrorMessage(err);
            setErrorState(true);
        }
    },[err,userData])

    function validateData(userObj) {
        const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/ //pattern used only for the sake of simplicity
        document.getElementById('pass').value = '';
        document.getElementById('rePass').value = '';

        if(!userObj.email || !EMAIL_PATTERN.test(userObj.email)){
            setUserData({email:userObj.email});
            setErrorState(true);
            return setErrorMessage('E-mail must be valid');
        }else if(!userObj.password || userData.password.lenght<6){
            setUserData({email:userObj.email});
            setErrorState(true);
            return setErrorMessage('Password should be at least 6 characters long');
        }else if(userObj.password !== userObj.rePass){
            setUserData({email:userObj.email});
            setErrorState(true);
            return setErrorMessage('Passwords do not match');
        }else{
           onSubmit({
               email:userObj.email,
               password:userObj.password,
           });
        }
        userObj={email:userObj.email}
    }

    function handleClose(event, reason){
        if (reason === 'clickaway') {
          return;
        }
        setErrorState(false);
      };

    

    return (
        <div className={classNames(styles["register-form"])}>
            <TextField
                fullWidth
                type="email"
                placeholder="Email"
                variant="standard"
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
                placeholder="Password"
                variant="standard"
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
            <TextField
                fullWidth
                type="password"
                placeholder="Retype Password"
                variant="standard"
                id="rePass"
                onChange={(ev)=>setUserData(Object.assign(userData,{rePass:ev.target.value.trim()}))}
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
                onClick={()=>validateData(userData)}
                variant="contained"
                className={classNames(styles["button"])}
            >
                Register
                <Snackbar open={errorState} autoHideDuration={5000} onClose={handleClose}>
                    <Alert severity="error" onClose={handleClose}>{errorMessage}</Alert>
                </Snackbar>
            </Button>
        </div>
    )
}
