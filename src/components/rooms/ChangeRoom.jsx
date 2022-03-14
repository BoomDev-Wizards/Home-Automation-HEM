import styles from "./ChangeRoom.module.scss";
import classNames from "classnames";
import Modal from "../modal/Modal";
import Card from "../card/Card";
import { Grid } from "@mui/material";
import { useState } from "react";

export default function ChangeRoom({ open, handleClose, onSubmit, rooms }) {

    const [selected,setSelected] = useState();

    return (
        <Modal
            className={classNames(styles["modal-wrapper"])}
            title="CHANGE ROOM"
            buttonText="SAVE CHANGES"
            open={open}
            handleClose={handleClose}
            handleSubmit={onSubmit}
            buttonProps ={{color:'#e150a6'}}
        >
            <Grid 
            className={classNames(styles["grid-wrapper"])}
            container 
            rowSpacing={2} 
            justifyContent='space-between'>
                {rooms.map((el)=>{
                    return(
                        <Grid item key={el.id} xs={6}>
                            <Card
                            iconUrl={'/images/bed.svg'}
                            onClick={()=>setSelected(el.id)}
                            title={el.name}
                            variant={selected==el.id?'on':'off'}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Modal>
    )
}