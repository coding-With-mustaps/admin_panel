

import React from 'react';
import { Chart } from "./ChartContainer.style";

const ChartContainer = () => {
  return (
    <Chart>
      <div>1</div>
      <div>2</div>
    </Chart>
  )
}

export default React.memo(ChartContainer);
