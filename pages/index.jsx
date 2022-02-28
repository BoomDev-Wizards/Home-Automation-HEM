import { React, useState, useEffect, Fragment } from "react";
import Header from "../src/components/header/Header";
import Navigation from "../src/components/navigation/Navigation";
import Scenes from "../src/components/scenes/Scenes";
import Time from "../src/components/time/Time";
import User from "../src/components/user/User";
import Weather from "../src/components/weather/Weather";
import Cameras from "../src/components/cameras/Cameras";
import devicesData from "../data/devices.json";
import Energy from "../src/components/energy/Energy";
import Card from "../src/components/card/Card";
import Rooms from "../src/components/rooms/Rooms";

export default function Index() {
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    setDevices(devicesData);
  }, []);

  const cameras = {
    "cameras": [
      { "videoUrl": "/cameras/balcony.mp4" },
      { "videoUrl": "/cameras/bathroom.mp4" },
      { "videoUrl": "/cameras/front-door.mp4" },
      { "videoUrl": "/cameras/garden.mp4" },
      { "videoUrl": "/cameras/kitchen.mp4" },
      { "videoUrl": "/cameras/living room 2.mp4" },
    ],
    "hasButton": true
  }

  const chartData = [
    { energy: 25, hour: 12 },
    { energy: 13, hour: 13 },
    { energy: 14, hour: 14 },
    { energy: 15, hour: 15 },
    { energy: 15, hour: 16 },
    { energy: 10, hour: 17 },
  ];

  const roomsArr= [
    {url:'/images/bed.svg', title:'bedroom'},
    {url:'/images/bed.svg', title:'bedroom'},
    {url:'/images/bed.svg', title:'bedroom'},
    {url:'/images/bed.svg', title:'bedroom'},
    {url:'/images/bed.svg', title:'bedroom'},
  ]

  return (
    <Fragment>
      <Header
        left={<User name="John Doe" avatar="/images/avatar.png" size={114} hasWelcome={true} headingSize="h1" />}
        right={<Fragment>
          <Weather degrees={22} type="cloudy" />
          <Time />
        </Fragment>}
      />
      <Rooms rooms={roomsArr}/>
      {/* <Energy data={chartData} /> */}
      {/* <Cameras cameras={cameras.cameras} hasButton={cameras.hasButton} /> */}
      {/* <Scenes cards={devices.devices} /> */}
      {/* <Navigation /> */}
    </Fragment>
  )
}
