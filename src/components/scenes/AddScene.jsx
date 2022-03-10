import styles from "./AddScene.module.scss";
import classNames from "classnames";
import Modal from "../modal/Modal";
import { TextField } from "@mui/material";
import SceneComposer from "./SceneComposer";

export default function AddScene({ devices, rooms, onScene, onSubmit }) {
    return (
        <Modal open={true} title={"ADD SCENE"} buttonText={"ADD NEW SCENE"} handleSubmit={onSubmit}>
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