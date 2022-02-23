import Example from "../src/components/example/Example";
import * as React from "react";
import Header from "../src/components/header/Header";
import Time from "../src/components/time/Time";
import User from "../src/components/user/User";
import Weather from "../src/components/weather/Weather";

export default function Index() {
  // return <Example/>;
  return <Header
            left={<User name="John Doe" avatar="/images/avatar.png" size={114} hasWelcome={true} headingSize="h1" />}
            right={<React.Fragment>
                      <Weather degrees={22} type="cloudy" />
                      <Time />
                  </React.Fragment>}
          />
}
