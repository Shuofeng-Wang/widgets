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

// export default { title: 'Button' };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
    <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
    </Button>
);