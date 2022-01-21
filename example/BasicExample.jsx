import * as React from 'react';
import { useState } from 'react';
import Modal from '../src/index';

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
            <Modal isOpen={isOpen} onClose={onClose} isOverlay isDraggable>
                <div style={{ padding: '10px' }}>
                    <button onClick={onClose}>Close Modal</button>
                    <h1>Hello Modal</h1>
                </div>
            </Modal>
        </div>
    );
};
export default BasicModal;
