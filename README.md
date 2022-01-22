### Features

React Portal Dialog is an Awesome Customizable and Draggable Modal.

-   Basic Modal ✅
-   Supports Nested Modal ✅
-   Custom Style ✅
-   Draggable Modal ✅

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

```bash
npm i react-portal-dialog
yarn add react-portal-dialog
```

## Examples

Here is a simple example of react-portal-dialog being used in an app with some custom
styles ModalBody within the modal content:

## Live Demo

[Basic Modal Example](https://codesandbox.io/s/naughty-fire-pmfod)

[Nested Modal Example](https://codesandbox.io/s/react-portal-dialog-nested-example-siimn)

#### Basic Modal

```jsx
import Modal from 'react-portal-dialog';
import { useState } from 'react';

const BasicModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onOpen = () => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };
    return (
        <div>
            <button onClick={onOpen}>Open Modal</button>
            <Modal isOpen={isOpen} onClose={onClose} isOverlay>
                <div style={{ padding: '10px' }}>
                    <button onClick={onClose}>Close Modal</button>
                    <h1>Hello Modal</h1>
                </div>
            </Modal>
        </div>
    );
};
export default BasicModal;
```

#### Modal With Custom Style

```jsx
import Modal from 'react-portal-dialog';
import { useState } from 'react';

const customStyles = {
    maxHeight: '450px',
    width: '400px',
    background: 'lightblue',
};

const CustomStyleModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onOpen = () => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };
    return (
        <div>
            <button onClick={onOpen}>Open Custom Modal</button>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                customStyles={customStyles}
                isOverlay
            >
                <div style={{ padding: '10px' }}>
                    <button onClick={onClose}>Close Modal</button>
                    <h1>Hello Modal</h1>
                </div>
            </Modal>
        </div>
    );
};
export default CustomStyleModal;
```

#### Nested Modal

```jsx
import Modal from 'react-portal-dialog';
import { useState } from 'react';

const AnotherModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onOpen = () => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };
    return (
        <div>
            <button onClick={onOpen}>Open Child Modal</button>
            <Modal isOpen={isOpen} onClose={onClose} isOverlay>
                <div style={{ padding: '10px' }}>
                    <button onClick={onClose}>Close Child Modal</button>
                    <h1> Child Modal</h1>
                </div>
            </Modal>
        </div>
    );
};
export default AnotherModal;

import Modal from 'react-portal-dialog';
import { useState } from 'react';

const customStyles = {
    maxHeight: '450px',
    width: '400px',
    background: 'lightblue',
};

const NestedModalExample = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onOpen = () => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };
    return (
        <div>
            <button onClick={onOpen}>Open Modal</button>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                customStyles={customStyles}
                isOverlay
            >
                <div style={{ padding: '10px' }}>
                    <button onClick={onClose}>Close Modal</button>
                    <AnotherModal />
                    <h1>Hello Modal</h1>
                </div>
            </Modal>
        </div>
    );
};
export default NestedModalExample;
```

You can find more examples in the examples directory, which you can run in a local development server using npm start or yarn run start

## Props

| Property     | Required | Types    | Description                             | Default  |
| ------------ | -------- | -------- | --------------------------------------- | -------- |
| isOpen       | required | Boolean  | whether the modal is open               | false    |
| onClose      | required | Function | Close the modal                         | -        |
| children     | optional | Elements | Children elements wrapped in modal body | children |
| customStyles | optional | Style    | Update Modal Body Style                 | null     |
| isDraggable  | optional | Boolean  | Move for Modal Body                     | false    |
| isOverlay    | optional | Boolean  | Overlay Background                      | true     |
