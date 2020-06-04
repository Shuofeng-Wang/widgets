import React from "react";
import {render} from "react-dom";
import MapChart from "../src/MapChart";
import choroplethMapChart from "../src/choroplethMapChart";

export default {
    component: MapChart,
    title: 'MapChart',
};

export const usaStatesMap = () => <MapChart />;

export const choroplethMap = () => <choroplethMapChart />;