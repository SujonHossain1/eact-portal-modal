### Features

React Portal Dialog is an Awesome Customizable Modal.

-   Basic modal ✅
-   Supports Nested modal ✅
-   Custom Style ✅

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

```bash
npm i react-portal-dialog
yarn add react-portal-dialog
```

## Examples

Here is a simple example of react-portal-dialog being used in an app with some custom
styles overlay and ModalBody within the modal content:

## Live Demo

[Basic Modal Example](https://codesandbox.io/s/naughty-fire-pmfod)

[Nested Modal Example](https://codesandbox.io/s/react-portal-dialog-nested-example-siimn)

#### Basic Modal

```jsx
import Modal from ' react-portal-dialog';
import { useState } from 'react';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            <button onClick={openModal}>Open Modal</button>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <button onClick={closeModal}>Close Modal</button>
            </Modal>
        </>
    );
}

export default App;
```

#### Modal With Custom Style

```jsx
import * as React from 'react';
import Modal from ' react-portal-dialog';

const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    left: '0',
    right: '0',
    top: ' 0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '1000',
};

const modalBodyStyle: React.CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    maxHeight: '450px',
    width: '400px',
    background: 'gray',
    zIndex: '1000',
    padding: '10px',
    transform: 'translate(-50%, -50%)',
};

const Example = () => {
    const [isOpen, setIsOpen] = React.useState(false);

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
                modalBodyStyle={modalBodyStyle}
                overlayStyle={overlayStyle}
            >
                <button onClick={onClose}>Close</button>
                <h1
                    style={{ backgroundColor: 'saddlebrown', padding: '100px' }}
                ></h1>
            </Modal>
        </div>
    );
};

export default Example;
```

You can find more examples in the examples directory, which you can run in a local development server using npm start or yarn run start

## Props

| Property | Required | Types    | Description                             | Default  |
| -------- | -------- | -------- | --------------------------------------- | -------- |
| isOpen   | required | Boolean  | whether the modal is open               | false    |
| onClose  | required | Function | Close the modal                         | -        |
| children | optional | Elements | Children elements wrapped in modal body | children |
