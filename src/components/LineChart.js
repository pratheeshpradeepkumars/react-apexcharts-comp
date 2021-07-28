import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: this.props.options
        ? this.props.options
        : {
            chart: {
              id: this.props.id || 'basic-line'
            },
            xaxis: {
              categories: this.props.xAxis || []
            }
          },
      series: this.props.data || []
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LineChart;
