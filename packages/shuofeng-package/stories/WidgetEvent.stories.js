import React from "react";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.css';
import './stylesheet/CardStyle.css';
import {Button} from "react-bootstrap";
import CharDemo from "../src/chart";
import MapChart from "../src/MapChart";
import DoughnutChart from "../src/doughnuts";

export default { title: "Widget" };

export const withCard = () => (
    <Card style={{ width: '25rem', borderRadius: '20px', margin: 'auto', marginTop:'60px'}}>
        <Card.Body>
            <div className={"container"}>
                <div className={"value-descrp-group"}>
                    <Card.Title className={"event-value"}>3 hr 48 min</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted event-description">Average Time for Attended Events</Card.Subtitle>
                </div>

                <div className={"value-descrp-group"}>
                    <Card.Title className={"event-value"}>321</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted event-description">Total Number of your Events</Card.Subtitle>
                </div>
            </div>

            <div className={"container"}>
                <div className={"row"}>

                    <div className={"col-4"}>
                        <Card.Title className={"event-value"}>5</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted event-description">in weekly</Card.Subtitle>
                        <p className={"decrease-percent"}>🔻 (-78.7%)</p>
                    </div>
                    <div className={"col-4"}>
                        <Card.Title className={"event-value"}>3</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted event-description">in monthly</Card.Subtitle>
                        <p className={"decrease-percent"}>🔻 (-78.7%)</p>
                    </div>
                    <div className={"col-4"}>
                        <Card.Title className={"event-value"}>20</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted event-description">in yearly</Card.Subtitle>
                        <p className={"decrease-percent"}>🔻 (-78.7%)</p>
                    </div>

                </div>
                <div className={"row"}>
                    <div className={"col-4"}>
                        <Button className={"timespan-btn btn-clicked"} size={'sm'}>Week</Button>{' '}
                    </div>
                    <div className={"col-4"}>
                        <Button className={"timespan-btn btn-unclicked"} size={'sm'}>Month</Button>{' '}
                    </div>
                    <div className={"col-4"}>
                        <Button className={"timespan-btn btn-unclicked"} size={'sm'}>Year</Button>{' '}
                    </div>
                </div>
            </div>

            <div className={"chart-bar"}>
                <CharDemo />
            </div>

            <div className={"container"}>
                <div className={"value-descrp-group"}>
                    <Card.Title className={"event-value"}>23</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted event-description">Total Number of Unattended Events</Card.Subtitle>
                </div>
            </div>

            <div className={"container"}>
                <div className={"row"}>

                    <div className={"col-4"}>
                        <Card.Title className={"event-value"}>0</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted event-description">in weekly</Card.Subtitle>
                        <p className={"unattended-events-percent"}>➖ 0%</p>
                    </div>
                    <div className={"col-4"}>
                        <Card.Title className={"event-value"}>0</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted event-description">in monthly</Card.Subtitle>
                        <p className={"unattended-events-percent"}>➖ 0%</p>
                    </div>
                    <div className={"col-4"}>
                        <Card.Title className={"event-value"}>1</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted event-description">in yearly</Card.Subtitle>
                        <p className={"unattended-events-percent"}>➖ 0%</p>
                    </div>

                </div>
                <div className={"row"}>
                    <div className={"col-4"}>
                        <Button className={"timespan-btn btn-clicked"} size={'sm'}>Week</Button>{' '}
                    </div>
                    <div className={"col-4"}>
                        <Button className={"timespan-btn btn-unclicked"} size={'sm'}>Month</Button>{' '}
                    </div>
                    <div className={"col-4"}>
                        <Button className={"timespan-btn btn-unclicked"} size={'sm'}>Year</Button>{' '}
                    </div>
                </div>
            </div>

            <div className={"container"}>
                <div className={"value-descrp-group"}>
                    <Card.Title className={"event-value"}>Top Events on Location</Card.Title>
                </div>

                <div className={"row"}>
                    <div className={"col-4"}>
                        <Button className={"timespan-btn btn-clicked"} size={'sm'}>Week</Button>{' '}
                    </div>
                    <div className={"col-4"}>
                        <Button className={"timespan-btn btn-unclicked"} size={'sm'}>Month</Button>{' '}
                    </div>
                    <div className={"col-4"}>
                        <Button className={"timespan-btn btn-unclicked"} size={'sm'}>Year</Button>{' '}
                    </div>
                </div>
            </div>

            <div className={"map-chart"}>
                <MapChart />
            </div>

            <div className={"container"}>
                <div className={"value-descrp-group"}>
                    <Card.Title className={"event-value"}>Top Connected Sources</Card.Title>
                </div>

                <div className={"row"}>
                    <div className={"col-4"}>
                        <Button className={"timespan-btn btn-clicked"} size={'sm'}>Week</Button>{' '}
                    </div>
                    <div className={"col-4"}>
                        <Button className={"timespan-btn btn-unclicked"} size={'sm'}>Month</Button>{' '}
                    </div>
                    <div className={"col-4"}>
                        <Button className={"timespan-btn btn-unclicked"} size={'sm'}>Year</Button>{' '}
                    </div>
                </div>
                <br />
                <div className={"row"}>

                    <div className={"col-4"}>
                        <Card.Title className={"event-value"}>24</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted event-description">Instagram</Card.Subtitle>
                    </div>
                    <div className={"col-4"}>
                        <Card.Title className={"event-value"}>21</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted event-description">Google</Card.Subtitle>
                    </div>
                    <div className={"col-4"}>
                        <Card.Title className={"event-value"}>13</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted event-description">Linkedin</Card.Subtitle>
                    </div>

                </div>
            </div>

            <div>
                <DoughnutChart />
            </div>

            <br />

            {/*<Card.Text>*/}
            {/*    Some quick example text to build on the card title and make up the bulk of*/}
            {/*    the card's content.*/}
            {/*</Card.Text>*/}
            {/*<Card.Link href="#">Card Link</Card.Link>*/}
            {/*<Card.Link href="#">Another Link</Card.Link>*/}
        </Card.Body>
    </Card>
);