import styles from "./Modal.module.scss";
import classNames from "classnames";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";

export default function Modal({ open, title, buttonText, handleSubmit, handleClose, buttonProps, children }) {

    const [openState, setOpenState] = useState(open)

    return (
        <div className={classNames(styles.modal_wrapper)}>
            <Dialog
                className={classNames(styles.modal_dialog)}
                onClose={handleClose}
                open={openState}
                BackdropProps={{ style: { backgroundColor: "#5C2FCF", opacity: 0.5 } }}
                PaperProps={{ style: { minWidth: "525px", maxWidth: "unset", maxHeight:"100%"} }}>
                <DialogTitle className={classNames(styles.modal_title)}>{title}</DialogTitle>
                <DialogContent className={classNames(styles.modal_content)}>
                    {children}
                </DialogContent>
                <Button 
                className={classNames(styles.modal_button)} 
                // style={buttonProps?{backgroundColor: buttonProps.color}:null}
                color={buttonProps?buttonProps:'primary'}
                onClick={handleSubmit}>
                    {buttonText}
                </Button>
            </Dialog>
        </div>
    )
}