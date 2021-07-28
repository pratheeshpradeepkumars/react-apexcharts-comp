import React from 'react';
import './style.css';
import LineChart from './components/LineChart';

export default function App() {
  return (
    <div>
      <LineChart
        id={'line-1'}
        xAxis={[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]}
        data={[
          {
            name: 'series-1',
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          },
          {
            name: 'series-2',
            data: [130, 4, 25, 50, 69, 120, 170, 21]
          }
        ]}
        // options={{
        //   chart: {
        //     id: 'basic-bar'
        //   },
        //   xaxis: {
        //     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        //   }
        // }}
      />
    </div>
  );
}
