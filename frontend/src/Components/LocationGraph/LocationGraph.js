import React from 'react'
import { Bar, Pie ,Line} from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import { data } from 'jquery'
import './LocationGraph.css'
import AssistantDashboard from '../Dashboard/AssistantDashboard'

const LocationGraph = () => {
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
        }
    var no_of_assets = [1552, 1319, 613, 1400,200, 349, 1200, 1000, 900, 1500];
    var colors = [];
    for (var j=0; j<no_of_assets.length; j++) {
      colors[j]=getRandomColor();
    }

    return (
        <div className="chart_body">
            <AssistantDashboard/>
      <h1 className='chart_h1'>Statistics of Assets present in a Location</h1>
      <div  className='chart'>
        <Pie
          data={{
            // Name of the variables on x-axies for each bar
            labels: ["DELL","HP","ACER","SONY","SAMSUNG","MI","VKit","Canakit","PHILIPS","ASUS"],
            datasets: [
              {
                // Label for bars
                label: "no. of assets present",
                // Data or value of your each variable
                data: no_of_assets,
                // Color of each bar
                backgroundColor:colors
              },
            ],
          }}
          // Height of graph
          height={400}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                  scaleLabel: {
        display: true,
        labelString: 'No. of Contributions'
      }
                },
              ],
              xAxes:[
                {
                  display:true,
                  title: {
                    display: true,
                    text: 'Your Title'
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>
    </div>
    )
}

export default LocationGraph
