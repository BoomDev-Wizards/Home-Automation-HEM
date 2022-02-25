import * as React from "react";
import Card from "../src/components/card/Card";
import Header from "../src/components/header/Header";
import Navigation from "../src/components/navigation/Navigation";
import Time from "../src/components/time/Time";
import User from "../src/components/user/User";
import Weather from "../src/components/weather/Weather";

export default function Index() {

  return (
    <React.Fragment>
      <Header
        left={<User name="John Doe" avatar="/images/avatar.png" size={114} hasWelcome={true} headingSize="h1" />}
        right={<React.Fragment>
          <Weather degrees={22} type="cloudy" />
          <Time />
        </React.Fragment>}
      />
      <Card iconUrl={'/images/alarm-clock.svg'} outlined={true}/>
      {/* <Navigation /> */}
    </React.Fragment>
  )
}
