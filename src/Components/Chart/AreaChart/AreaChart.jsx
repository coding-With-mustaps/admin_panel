import React, { useContext } from "react";
import { AreaChartContainer, H2 } from "./AreaChart.style";
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ThemeContext} from "../../../Context/ThemeContext";

//! Dome data
const data = [
    {
      "name": "January",
      "Total": 100
    },
    {
      "name": "February",
      "Total": 200
    },
    {
      "name": "March",
      "Total": 930
    },
    {
      "name": "April",
      "Total": 780
    },
    {
      "name": "May",
      "Total": 1890
    },
    {
      "name": "June",
      "Total": 2390
    }
  ];

const AreaChartComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
      <AreaChartContainer variate={theme}>
          <H2>Last three (3) months earning</H2>
          <ResponsiveContainer height={"90%"}>
              <AreaChart data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                      </linearGradient>
                  </defs>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid stroke={theme === "light" ? "lightgray" : "#2b2d42"} strokeDasharray="3 3" />
                  <Tooltip />
                  <Area type="monotone" dataKey="Total" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
              </AreaChart>
          </ResponsiveContainer>
    </AreaChartContainer>
  )
};

export default React.memo(AreaChartComponent);