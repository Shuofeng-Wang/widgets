import React from "react";
import { ObjectTest, ComponentTest } from "../src";


export default { title: "Index" };

export const indexTest = () => <div>{JSON.stringify(ObjectTest)}</div>;

indexTest.story = {
  name: "Object",
};

export const indexTest2 = () => <ComponentTest />;

indexTest2.story = {
  name: "Component",
};

// Below is another demo test
import { Button } from '@storybook/react/demo';
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.css';

// export default { title: 'Button' };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
    <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
    </Button>
);

export const withCard = () => (
    // <Card>
    //     <Card.Body>This is some text within a card body.</Card.Body>
    // </Card>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
    </Card>
);