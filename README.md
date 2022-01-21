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
                <button onClick={closeModal}>Close Modal</button>
                <h1>Hello Modal</h1>
            </Modal>
        </div>
    );
};
export default BasicModal;
```

#### Modal With Custom Style

```jsx
import Modal from ' react-portal-dialog';
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
                isOverlay
                customStyles={customStyles}
            >
                <button onClick={closeModal}>Close Modal</button>
                <h1>Hello Modal</h1>
            </Modal>
        </div>
    );
};
export default CustomStyleModal;
```

You can find more examples in the examples directory, which you can run in a local development server using npm start or yarn run start

## Props

| Property     | Required | Types    | Description                             | Default  |
| ------------ | -------- | -------- | --------------------------------------- | -------- |
| isOpen       | required | Boolean  | whether the modal is open               | false    |
| onClose      | required | Function | Close the modal                         | -        |
| children     | optional | Elements | Children elements wrapped in modal body | children |
| customStyles | optional | Style    | Update Modal Body Style                 | null     |
| isOverlay    | optional | Boolean  | Overlay Background                      | false    |
