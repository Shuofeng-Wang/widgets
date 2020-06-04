import React from 'react';
import {Doughnut} from "react-chartjs-2";

const data = {
    labels: [
        'Google',
        'Linkedin',
        'Facebook',
        'Twitter',
        'Other'
    ],
    datasets: [{
        data: [24, 21, 13, 15, 8],
        backgroundColor: [
            '#1F766F',
            '#20988F',
            '#91D8D2',
            '#35E0D3',
            '#47ECDF'
        ],
        hoverBackgroundColor: [
            '#1F766F',
            '#20988F',
            '#91D8D2',
            '#35E0D3',
            '#47ECDF'
        ]
    }]
}

export default class doughnutChart extends React.Component{
    render() {
        return (
            <div>
                <Doughnut data={data}
                          options={{
                              legend:{
                                  fontColor: '#4F4F4F',
                                  fontSize: 9,
                                  boxWidth: 20,
                                  position:'left'
                              }
                          }}
                />
            </div>
        );
    }
}