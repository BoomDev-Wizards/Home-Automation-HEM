import styles from "./Register.module.scss";
import classNames from "classnames";
import { Button, InputAdornment, TextField } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export default function Register() {
    return (
        <div className={classNames(styles["register-form"])}>
            <TextField
                fullWidth
                type="email"
                placeholder="Email"
                variant="standard"
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
            >
                Register
            </Button>
        </div>
    )
}
