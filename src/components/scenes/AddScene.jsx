import styles from "./AddScene.module.scss";
import classNames from "classnames";
import Modal from "../modal/Modal";
import { TextField } from "@mui/material";
import SceneComposer from "./SceneComposer";

export default function AddScene({open, handleClose, devices, rooms, onScene, onSubmit }) {
    return (
        <Modal 
        open={open} 
        handleClose={handleClose} 
        title={"ADD SCENE"} 
        buttonText={"ADD NEW SCENE"} 
        handleSubmit={onSubmit}>
            <TextField 
            className={classNames(styles["name-field"])} 
            label="Scene Name" 
            variant="filled"
            style={{margin:"10px"}}
            />
            <SceneComposer devices={devices} rooms={rooms} onScene={onScene}/>
        </Modal>
    )
}