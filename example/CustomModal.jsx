import * as React from 'react';
import { useState } from 'react';
import Modal from '../src/index';

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
