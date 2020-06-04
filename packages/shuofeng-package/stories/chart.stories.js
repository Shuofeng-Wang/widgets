import React from "react";
import {render} from "react-dom";
import ChartDemo from "../src/chart";
import DoughnutChart from "../src/doughnuts";

export default {
    component: ChartDemo,
    title: 'ChartDemo',
};

export const chartDemo = () => <ChartDemo />;
export const doughnutsChart = () => <DoughnutChart />;