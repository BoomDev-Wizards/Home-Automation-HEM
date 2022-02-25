import { React, useState, useEffect, Fragment } from "react";
import Header from "../src/components/header/Header";
import Navigation from "../src/components/navigation/Navigation";
import Scenes from "../src/components/scenes/Scenes";
import Time from "../src/components/time/Time";
import User from "../src/components/user/User";
import Weather from "../src/components/weather/Weather";
import devicesData from "../data/devices.json";

export default function Index() {
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    setDevices(devicesData);
  }, []);

  return (
    <Fragment>
      <Header
        left={<User name="John Doe" avatar="/images/avatar.png" size={114} hasWelcome={true} headingSize="h1" />}
        right={<Fragment>
          <Weather degrees={22} type="cloudy" />
          <Time />
        </Fragment>}
      />
      <Scenes cards={devices} />
      {/* <Navigation /> */}
    </Fragment>
  )
}
