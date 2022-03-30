import { React, useState, useEffect, Fragment, useContext } from "react";
import Header from "../src/components/header/Header";
import Navigation from "../src/components/navigation/Navigation";
import Scenes from "../src/components/scenes/Scenes";
import Time from "../src/components/time/Time";
import User from "../src/components/user/User";
import Weather from "../src/components/weather/Weather";
import Cameras from "../src/components/cameras/Cameras";
import devicesData from "../data/devices.json";
import roomData from "../data/rooms.json";
import Energy from "../src/components/energy/Energy";
import Rooms from "../src/components/rooms/Rooms";
import { Container, Grid, Typography } from "@mui/material";
import Thermostat from "../src/components/thermostat/Thermostat";

import styles from "./Dashboard.module.scss";
import classNames from "classnames";
import { AppContext } from "../src/components/common/AppProvider";
import AddScene from "../src/components/scenes/AddScene";
import EditScene from "../src/components/scenes/EditScene";
import AddRoom from "../src/components/rooms/AddRoom";
import ChangeRoom from "../src/components/rooms/ChangeRoom";

export default function Index() {

  const [devices, setDevices] = useState([]);
  useEffect(() => {
    setDevices(devicesData);
  }, []);

  const cameras = {
    "cameras": [
      { "videoUrl": "https://static.videezy.com/system/resources/previews/000/017/340/original/Room_In_The_Palace_Of_Iturbide_Mexico_5013e.mp4" },
      { "videoUrl": "https://static.videezy.com/system/resources/previews/000/055/870/original/1newroomjapanese48558899885.mp4" },
      { "videoUrl": "https://static.videezy.com/system/resources/previews/000/051/944/original/0001-0443.mp4" },
      { "videoUrl": "https://static.videezy.com/system/resources/previews/000/053/432/original/1newroomjapanes88888888.mp4" },
      { "videoUrl": "https://static.videezy.com/system/resources/previews/000/035/346/original/005_06.mp4" },
      { "videoUrl": "https://static.videezy.com/system/resources/previews/000/051/948/original/greenroominterior4545121326555899.mp4" },
    ],
    "hasButton": false
  }

  const chartData = [
    { energy: 25, hour: 12 },
    { energy: 13, hour: 13 },
    { energy: 14, hour: 14 },
    { energy: 15, hour: 15 },
    { energy: 15, hour: 16 },
    { energy: 10, hour: 17 },
  ];

  const tempDataArr = [
    { temperature: 25, hour: 12 },
    { temperature: 13, hour: 13 },
    { temperature: 14, hour: 14 },
    { temperature: 15, hour: 15 },
    { temperature: 15, hour: 16 },
    { temperature: 10, hour: 17 },
  ]

  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    setRooms(roomData.rooms);
  }, [])


  let token
  if (typeof window !== 'undefined') {
    token = `Bearer ${localStorage.getItem('accessToken')}`
    if (!localStorage.getItem('accessToken')) {
      window.location.replace("/login");
    }
  }

  const [addSceneModal, setAddSceneModal] = useState(false);
  const [editSceneModal, setEditSceneModal] = useState(false);
  const [addRoomModal, setAddRoomModal] = useState(false);
  const [changeRoomModal, setChangeRoomModal] = useState(false);


  const value = useContext(AppContext);

  return (
    typeof window !== 'undefined' ? localStorage.getItem('accessToken') ?
      <Fragment>
        <main className={classNames(styles["wrapper"])}>
        <Navigation rooms={rooms} />
          <div className={classNames(styles["hero_line"])}></div>
          <Container className={classNames(styles["container"])} maxWidth={false}>
            <Grid container spacing={2} alignItems={'stretch'}>
              <Grid item xs={12}>
                <Header className={classNames(styles["head"])}
                  left={<User name="John Doe" avatar="/images/avatar.png" size={114} hasWelcome={true} headingSize="h1" />}
                  right={<Fragment>
                    <Weather degrees={22} type="cloudy" />
                    <Time className={classNames(styles.time)} />
                  </Fragment>}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h4" className={classNames(styles["comp_name"])}>Thermostat</Typography>
                <Thermostat data={tempDataArr} />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h4" className={classNames(styles["comp_name"])} >Scenes</Typography>
                <Scenes
                  cards={devices.devices}
                  hasButton={true}
                  onButtonClick={() => setAddSceneModal(true)}
                  onCardClick={() => setEditSceneModal(true)} />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h4">Cameras</Typography>
                <Cameras cameras={cameras.cameras} hasButton={cameras.hasButton} />
              </Grid>
              <Grid item xs={6}>
                <Energy data={chartData} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" className={classNames(styles["comp_name"])}>Rooms</Typography>
                  <Rooms rooms={rooms} onButtonClick={()=>setAddRoomModal(true)} onCardClick={()=>setChangeRoomModal(true)}/>
              </Grid>
            </Grid>
          </Container>
        </main>
        <AddScene
          devices={devices.devices}
          rooms={rooms}
          open={addSceneModal}
          handleClose={() => setAddSceneModal(false)}
          onSubmit={() => setAddSceneModal(false)} />
        <EditScene
          devices={devices.devices}
          rooms={rooms}
          open={editSceneModal}
          handleClose={() => setEditSceneModal(false)}
          onSubmit={() => setEditSceneModal(false)} />
        <AddRoom
          open={addRoomModal}
          handleClose={() => setAddRoomModal(false)}
          onSubmit={() => setAddRoomModal(false)}
        />
        <ChangeRoom
          open={changeRoomModal}
          rooms ={rooms}
          handleClose={() => setChangeRoomModal(false)}
          onSubmit={() => setChangeRoomModal(false)}
        />
      </Fragment>
      : null
      : null
  )
}
