import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "../../src/components/link/Link";
import Devices from "../../src/components/devices/Devices";
import Modal from "../../src/components/modal/Modal";
import SceneComposer from "../../src/components/scenes/SceneComposer";

import deviceData from "../../data/devices.json";
import roomData from "../../data/rooms.json";
import AddScene from "../../src/components/scenes/AddScene";
import EditScene from "../../src/components/scenes/EditScene";


export default function About() {

  // const cardsArr = [
  //   {"title": "on", "iconUrl": "/images/bulb.svg"},
  //   {"title": "off", "iconUrl": "/images/bulb.svg"},
  //   {"title": "off", "iconUrl": "/images/plug.svg"},
  //   {"title": "offline", "iconUrl": "/images/plug.svg"},
  // ]

  const [devices,setDevices] = React.useState([]);
  React.useEffect(()=>{
    setDevices(deviceData.devices);
  },[])

  const [rooms,setRooms] = React.useState([]);
  React.useEffect(()=>{
    setRooms(roomData.rooms);
  },[])

 
  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center">
        <Grid item>
          <Button variant="contained" component={Link} noLinkStyle href="/">
            🏠 Home
          </Button>
        </Grid>
      </Grid>
      {/* <Devices devices={cardsArr}/> */}
      {/* <Modal open={true} title='Modal Title' buttonText='Modal Action'>
        <h3>Some text to fit in</h3>
      </Modal> */}
      {/* <SceneComposer devices={devices} rooms={rooms}/> */}
      {/* <AddScene open={true} rooms={rooms} devices={devices}/> */}
      <EditScene open={true} rooms={rooms} devices={devices}/>
    </Container>
  );
}
