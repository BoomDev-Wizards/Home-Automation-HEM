import styles from "./EditScene.module.scss";
import classNames from "classnames";
import Modal from "../modal/Modal";
import { TextField } from "@mui/material";
import SceneComposer from "./SceneComposer";

export default function EditScene({ open, handleClose, devices, rooms, onScene, onSubmit, selected }) {
    return (
            <Modal
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
                <SceneComposer className={classNames(styles["composer"])}
                 devices={devices} 
                 rooms={rooms} 
                 onScene={onScene} 
                 selected={selected} />
            </Modal>
    )
}