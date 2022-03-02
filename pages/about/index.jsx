import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "../../src/components/link/Link";
import Card from "../../src/components/card/Card";
import Devices from "../../src/components/devices/Devices";

export default function About() {

  const cardsArr = [
    {"title": "on", "iconUrl": "/images/bulb.svg"},
    {"title": "off", "iconUrl": "/images/bulb.svg"},
    {"title": "off", "iconUrl": "/images/plug.svg"},
    {"title": "offline", "iconUrl": "/images/plug.svg"},
  ]
 
  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center">
        <Grid item>
          <Button variant="contained" component={Link} noLinkStyle href="/">
            🏠 Home
          </Button>
        </Grid>
      </Grid>
      <Devices devices={cardsArr}/>
    </Container>
  );
}
