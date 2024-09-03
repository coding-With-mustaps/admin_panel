

import React from 'react';
import { Chart } from "./ChartContainer.style";
import "./ChartContainer.css";
import AreaChart from './AreaChart/AreaChart';
import ProgressBar from './ProgressBar/ProgressBar';



const ChartContainer = () => {
  return (
    <Chart>
      <ProgressBar />
      <AreaChart />
    </Chart>
  )
}

export default React.memo(ChartContainer);
