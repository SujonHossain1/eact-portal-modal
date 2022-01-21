import * as React from 'react';
import { useState } from 'react';
import Modal from '../src/index';

const customStyles = {
    maxHeight: '450px',
    width: '400px',
    background: 'red',
};

const BasicExample = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onOpen = () => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };
    return (
        <div>
            <button onClick={onOpen}>Open</button>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                isOverlay
                customStyles={customStyles}
            >
                <h1>Hello Modal</h1>
            </Modal>
        </div>
    );
};

export default BasicExample;
