import React from "react";
import {Bar} from "react-chartjs-2";

const state = {
    labels: ['04/22', '04/23', '04/24',
        '04/25', '04/26','04/27','04/28'],
    datasets: [
        {
            // label: 'Rainfall',
            backgroundColor: '#44C5BB',
            // borderColor: 'rgba(0,0,0,1)',
            // borderWidth: 2,
            barPercentage: 0.5,
            data: [2, 2, 1, 2, 1, 3, 2]
        }
    ]
}

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Bar
                    data={state}
                    options={{
                        title:{
                            display:true,
                            // text:'Average Rainfall per month',
                            fontSize:20
                        },
                        legend:{
                            labels: {
                                fontColor: '#4F4F4F'
                            },
                            display:false,
                            position:'right'
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true,
                                    min: 0,
                                    max: 10,
                                    stepSize: 5
                                }
                            }]
                        }
                    }}
                />
            </div>
        );
    }
}