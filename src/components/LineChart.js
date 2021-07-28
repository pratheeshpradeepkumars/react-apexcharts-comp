import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: this.props.options || {},
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
              width={this.props.width || '100%'}
              height={this.props.height || ''}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LineChart;
