import styles from "./EditScene.module.scss";
import classNames from "classnames";
import Modal from "../modal/Modal";
import { TextField } from "@mui/material";
import SceneComposer from "./SceneComposer";

export default function EditScene({ open, handleClose, devices, rooms, onScene, onSubmit, selected }) {
    return (
            <Modal className={classNames(styles["modal-wrapper"])}
                open={open}
                handleClose={handleClose}
                title={"EDIT SCENE"}
                buttonText={"SAVE CHANGES"}
                handleSubmit={onSubmit}>
                <TextField
                    className={classNames(styles["name-field"])}
                    label="Scene Name"
                    variant="filled"
                    style={{ margin: "10px" }}
                />
                <SceneComposer className={classNames(styles["scene-composer"])}
                 devices={devices} 
                 rooms={rooms} 
                 onScene={onScene}/>
            </Modal>
    )
}