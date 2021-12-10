### Features

This is an Awesome Customizable Modal.

-   Basic modal ✅
-   Supports Nested modal ✅
-   Custom Style ✅

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

```bash
npm i @sujonhossainbd/react-portal-modal
yarn add  @sujonhossainbd/react-portal-modal
```

## Examples

Here is a simple example of react-portal-modal being used in an app with some custom
styles overlay and modalBoby within the modal content:

#### Basic Modal

```jsx
import Modal from '@sujonhossainbd/react-portal-modal';
import { useState } from 'react';

function App() {
    const [isOpen, setIsOpen] = useState < boolean > false;
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
import Modal from '@sujonhossainbd/react-portal-modal';

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
    const [isOpen, setIsOpen] = React.useState < boolean > false;

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

### Props

| Property | Required | Types    | Description                             | Default    |
| -------- | -------- | -------- | --------------------------------------- | ---------- |
| isOpen   | required | Boolean  | whether the modal is open               | false      |
| onClose  | required | Function | Close the modal                         | -          |
| children | optional | Elements | Children elements wrapped in modal body | - children |
