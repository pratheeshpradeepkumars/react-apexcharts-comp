import React from 'react';
import './style.css';
import LineChart from './components/LineChart';

export default function App() {
  return (
    <div>
      <LineChart
        id={'line-1'}
        height={'400px'}
        width={'400px'}
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
        options={{
          chart: {
            id: 'basic-bar',
            dropShadow: {
              enabled: true,
              color: '#000',
              top: 18,
              left: 7,
              blur: 10,
              opacity: 0.2
            },
            toolbar: {
              show: true
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth',
            width: 4
          },
          title: {
            text: 'Main title',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#fff', 'transparent'],
              opacity: 0.5
            }
          },
          //colors: ['#77B6EA', '#545454'],
          markers: {
            size: 1
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
            title: {
              text: 'X axis title'
            }
          },
          yaxis: {
            title: {
              text: 'Y axis title'
            }
          }
        }}
      />
    </div>
  );
}
