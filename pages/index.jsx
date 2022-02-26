import { React, useState, useEffect, Fragment } from "react";
import Header from "../src/components/header/Header";
import Navigation from "../src/components/navigation/Navigation";
import Scenes from "../src/components/scenes/Scenes";
import Time from "../src/components/time/Time";
import User from "../src/components/user/User";
import Weather from "../src/components/weather/Weather";
import Cameras from "../src/components/cameras/Cameras";
import devicesData from "../data/devices.json";

export default function Index() {
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    setDevices(devicesData);
  }, []);

  const cameras = {
    "cameras": [
      {
        "videoUrl": "/cameras/balcony.mp4"
      },
      {
        "videoUrl": "/cameras/bathroom.mp4"
      },
      {
        "videoUrl": "/cameras/front-door.mp4"
      },
      {
        "videoUrl": "/cameras/garden.mp4"
      },
      {
        "videoUrl": "/cameras/kitchen.mp4"
      },
      {
        "videoUrl": "/cameras/living room 2.mp4"
      },
    ],
    "hasButton": true
  }

  return (
    <Fragment>
      <Header
        left={<User name="John Doe" avatar="/images/avatar.png" size={114} hasWelcome={true} headingSize="h1" />}
        right={<Fragment>
          <Weather degrees={22} type="cloudy" />
          <Time />
        </Fragment>}
      />
      <Cameras cameras={cameras.cameras} hasButton={cameras.hasButton} />
      {/* <Scenes cards={devices.devices} /> */}
      {/* <Navigation /> */}
    </Fragment>
  )
}
