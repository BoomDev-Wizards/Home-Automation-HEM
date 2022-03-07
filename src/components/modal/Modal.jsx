import styles from "./Modal.module.scss";
import classNames from "classnames";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";

export default function Modal({ open, title, buttonText, handleSubmit, handleClose, children }) {

    const [openState, setOpenState] = useState(open)

    return (
        <div className={classNames(styles.modal_wrapper)}>
            <Dialog
                className={classNames(styles.modal_dialog)}
                onClose={handleClose}
                open={openState}
                BackdropProps={{ style: { backgroundColor: "#5C2FCF", opacity: 0.5 } }}
                PaperProps={{ style: { minWidth: "525px" } }}>
                <DialogTitle className={classNames(styles.modal_title)}>{title}</DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>
                <Button className={classNames(styles.modal_button)} onClick={handleSubmit}>{buttonText}</Button>
            </Dialog>
        </div>
    )
}