import React from "react";
import { geoCentroid } from "d3-geo";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    Annotation
} from "react-simple-maps";

import allStates from "./mapData/allstates.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
    VT: [50, -8],
    NH: [34, 2],
    MA: [30, -1],
    RI: [28, 2],
    CT: [35, 10],
    NJ: [34, 1],
    DE: [33, 0],
    MD: [47, 10],
    DC: [49, 21]
};

const MapChart = () => {
    return (
        <ComposableMap projection="geoAlbersUsa">
            <Geographies geography={geoUrl}>
                {({ geographies }) => (
                    <>
                        {geographies.map(geo => (
                            <Geography
                                key={geo.rsmKey}
                                stroke="#FFF"
                                geography={geo}
                                fill="#44C5BB"
                            />
                        ))}
                        {geographies.map(geo => {
                            const centroid = geoCentroid(geo);
                            const cur = allStates.find(s => s.val === geo.id);
                            return (
                                <g key={geo.rsmKey + "-name"}>
                                    {cur &&
                                    centroid[0] > -160 &&
                                    centroid[0] < -67 &&
                                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                                        <Marker coordinates={centroid}>
                                            <text y="2" fontSize={14} textAnchor="middle">
                                                {cur.id}
                                            </text>
                                        </Marker>
                                    ) : (
                                        <Annotation
                                            subject={centroid}
                                            dx={offsets[cur.id][0]}
                                            dy={offsets[cur.id][1]}
                                        >
                                            <text x={4} fontSize={14} alignmentBaseline="middle">
                                                {cur.id}
                                            </text>
                                        </Annotation>
                                    ))}
                                </g>
                            );
                        })}
                    </>
                )}
            </Geographies>
            <Marker coordinates={[-121, 36]}>
                <circle r={10} fill="#be3d26" />
            </Marker>
        </ComposableMap>
    );
};

export default MapChart;

// import React, { Component } from 'react';
// import {
//     ComposableMap,
//     ZoomableGroup,
//     Geographies,
//     Geography,
//     Markers,
//     Marker,
// } from "react-simple-maps"
// import {geoAlbersUsa} from "d3-geo";
//
// export default class MapChart extends React.Component {
//
//     render() {
//         return (
//             <div className="map-container">
//                 <ComposableMap
//                     projection={geoAlbersUsa}
//                     projectionConfig={{ scale: 1000 }}
//                     width={980}
//                     height={551}
//                     style={{
//                         width: "100%",
//                         height: "auto",
//                     }}
//                 >
//                     <ZoomableGroup center={[ -97, 40 ]} disablePanning>
//                         <Geographies  geography='/gadm36_USA.json'>
//                             {(geographies, projection) =>
//                                 geographies.map((geography, i) =>
//                                 <Geography
//                                 key={i}
//                                 geography={geography}
//                                 projection={projection}
//                                 style={{
//                                 default: {
//                                     fill: "#ECEFF1",
//                                     stroke: "#607D8B",
//                                     strokeWidth: 0.75,
//                                     outline: "none",
//                                 },
//                                 hover: {
//                                     fill: "#CFD8DC",
//                                     stroke: "#607D8B",
//                                     strokeWidth: 1,
//                                     outline: "none",
//                                 },
//                                 pressed: {
//                                     fill: "#FF5722",
//                                     stroke: "#607D8B",
//                                     strokeWidth: 1,
//                                     outline: "none",
//                                 }
//                             }}
//                                 />
//                                 )
//                             }
//                         </ Geographies>
//
//                         <Markers>
//                             <Marker
//                                 marker={{coordinates: [-153.2917758, 67.75961636]}}
//                                 style={{
//                                     default: { fill: "#FF5722" },
//                                     hover: { fill: "#FFFFFF" },
//                                     pressed: { fill: "#FF5722" },
//                                 }}
//                             >
//                                 <circle
//                                     cx={0}
//                                     cy={0}
//                                     r={5}
//                                     style={{
//                                         stroke: "#FF5722",
//                                         strokeWidth: 3,
//                                         opacity: 0.9,
//                                     }}
//                                 />
//                             </Marker>
//                         </Markers>
//
//                     </ ZoomableGroup>
//                 </ ComposableMap>
//             </div>
//         );
//     }
// }