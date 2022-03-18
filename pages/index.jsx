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
import { useRouter } from "next/dist/client/router";
import { AppContext } from "../src/components/common/AppProvider";

export default function Index() {

  const router = useRouter();

  const [devices, setDevices] = useState([]);
  useEffect(() => {
    setDevices(devicesData);
  }, []);

  const cameras = {
    "cameras": [
      { "videoUrl": "" },
      { "videoUrl": "" },
      { "videoUrl": "" },
      { "videoUrl": "" },
      { "videoUrl": "" },
      { "videoUrl": "" },
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
    token = localStorage.getItem('accessToken')
    if (!token) {
      window.location.replace("/login");
    }
  }

  const value = useContext(AppContext);
  console.log(value.scenes);  
  return (
      <Fragment>
        <Navigation />
        <main className={classNames(styles["wrapper"])}>
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
                <Scenes cards={devices.devices} />
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
                <Rooms rooms={rooms} />
              </Grid>
            </Grid>
          </Container>
        </main>
      </Fragment>
  )
}
