import styles from "./Login.module.scss";
import classNames from "classnames";
import { Button, InputAdornment, TextField } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export default function Login() {
    return (
        <div className={classNames(styles["login-form"])}>
            <TextField
                fullWidth
                type="email"
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
                Login
            </Button>
        </div>
    )
}
