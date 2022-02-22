import Example from "../src/components/example/Example";
import Weather from "../src/components/weather/Weather";
import User from "../src/components/user/User";
import Time from "../src/components/time/Time";
import Header from "../src/components/header/Header";

export default function Index() {
  return <Header 
          left={<User name="John Doe" avatar="/images/avatar.png" size={114} hasWelcome={true} headingSize="h1"/>}
          right={[<Weather degrees={22} type="cloudy" />, <Time />]}
        />;
}
