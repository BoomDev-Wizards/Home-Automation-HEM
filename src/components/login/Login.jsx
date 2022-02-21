import styles from "./Login.module.scss";
import classNames from "classnames";
import { FormControl, Button, TextField, InputAdornment } from "@mui/material";
import { Email as EmailIcon, Lock as LockIcon } from "@mui/icons-material";

export default function Login() {
    return (
        <div className={classNames(styles["login-form"])}>
            <FormControl>
                <TextField
                    fullWidth
                    id="email"
                    type="email"
                    variant="standard"
                    className={classNames(styles["input-field"])}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
                    }}
                />
                <TextField
                    fullWidth
                    id="password"
                    type="password"
                    variant="standard"
                    className={classNames(styles["input-field"])}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><LockIcon /></InputAdornment>,
                    }}
                />
                <Button
                    variant="contained"
                    className={classNames(styles["button"])}
                >
                    Login
                </Button>
            </FormControl>
        </div>
    )
}
