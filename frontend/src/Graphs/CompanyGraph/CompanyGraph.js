import React from 'react';
import { Bar, Pie ,Line} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart }            from 'react-chartjs-2';
import { data } from 'jquery';
import "./CompanyGraph.css";
import VerifierDashboard from '../../Components/Dashboard/VerifierDashboard';
const CompanyGraph = () => {
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
        }
    var contributions = [151, 133, 261, 140,200, 349, 120, 100, 90, 150];
    var colors = [];
    for (var j=0; j<contributions.length; j++) {
      colors[j]=getRandomColor();
    }

    return (
        <div className="chart_body">
            <VerifierDashboard/>
      <h1 className='chart_h1'>Company Contibution Statistics</h1>
      <div  className='chart'>
        <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: ["DELL","HP","ACER","SONY","SAMSUNG","MI","VKit","Canakit","PHILIPS","ASUS"],
            datasets: [
              {
                // Label for bars
                label: "total contibution",
                // Data or value of your each variable
                data: contributions,
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

export default CompanyGraph