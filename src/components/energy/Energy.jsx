import styles from "./Energy.module.scss";
import classNames from "classnames";
import { useState } from "react";
import { Grid, Typography, Select, MenuItem, } from "@mui/material";
import { ComposedChart, Line, Area, XAxis, CartesianGrid } from "recharts";

export default function Energy({ data }) {
    const [periodValue, setPeriodValue] = useState(0);
    const periodChange = (event) => {
        setPeriodValue(event.target.value);
    }

    return (
        <div className={classNames(styles["energy-container"])} >
            <Grid container spacing={2} justifyContent={"space-between"}>
                <Grid item>
                    <Typography variant="h4" >
                        Energy
                    </Typography>
                </Grid>
                <Grid item>
                    <Select
                        size="small"
                        id="period-select"
                        value={periodValue}
                        onChange={(event) => periodChange(event)}
                        className={classNames(styles["period-select"])}>
                        <MenuItem value={0}>This Week</MenuItem>
                        <MenuItem value={1}>This Month</MenuItem>
                        <MenuItem value={2}>This Year</MenuItem>
                    </Select>
                </Grid>
            </Grid>
            <ComposedChart width={800} height={400} data={data} id="energy-rechart">
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <XAxis dataKey="hour" />
                <Area type="monotone" dataKey="energy" fill="#E150A6" stroke="#E150A6" />
                <Line
                    type="monotone"
                    dataKey="energy"
                    dot={{ stroke: "white", strokeWidth: 2, r: 5, fill: "#E150A6" }}
                    strokeWidth={4}
                    stroke="#E150A6"
                />
            </ComposedChart>
        </div >
    )
}
