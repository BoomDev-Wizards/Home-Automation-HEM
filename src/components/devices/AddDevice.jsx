import styles from "./AddDevice.module.scss";
import classNames from "classnames";
import Modal from "../modal/Modal";
import { CircularProgress, Typography } from "@mui/material";


export default function AddDevice({ searching, found, failed, onDevice, open, handleClose, onSubmit }) {

    let device = onDevice;

    if(failed){
        searching=false;
        found=false;
    }

    if(found){
        searching=false;
        failed=false;
    }

    return (
        <Modal
            className={classNames(styles["modal-wrapper"])}
            title="ADD DEVICE"
            buttonText={searching ? null : (found ? "SAVE DEVICE" : "TRY AGAIN")}
            open={open}
            handleClose={handleClose}
            handleSubmit={onSubmit}
        >
            {searching ?
                <div className={classNames(styles.content)}>
                    <CircularProgress
                        size={400}
                        className={classNames(styles.progress)}
                    />
                    <CircularProgress
                        variant="determinate"
                        value={100}
                        size={400}
                        className={classNames(styles.progress__filled)}
                    />
                    <img src={'/images/search.svg'} alt="search_icon" className={classNames(styles.search_icon)} />
                    <Typography
                        variant="h6"
                        className={classNames(styles["action_text"])}
                    >
                        SEARCHING...
                    </Typography>
                </div>
                : (failed ?
                    <div className={classNames(styles.content)}>
                        <CircularProgress
                            variant="determinate"
                            value={100}
                            size={400}
                            className={classNames(styles.progress_fail)}
                        />
                        <img src={'/images/no-connection.svg'} alt="search_icon" className={classNames(styles.fail_icon)} />
                        <Typography
                            variant="h6"
                            className={classNames(styles["action_text"])}
                        >
                            NO DEVICE FOUND
                        </Typography>
                    </div>
                    : onDevice ?
                        <div className={classNames(styles.content)}>
                            <CircularProgress
                                variant="determinate"
                                value={100}
                                size={400}
                                className={classNames(styles.progress__filled)}
                            />
                            <img src={device.iconUrl} alt="device_icon" className={classNames(styles.device_icon)} />
                            <Typography
                                variant="h6"
                                className={classNames(styles["action_text"])}
                            >
                                {device.name}
                            </Typography>
                        </div>
                        : null
                )}
        </Modal>
    )
}