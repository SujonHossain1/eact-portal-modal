import * as React from 'react';
import Modal from '../src/index';

const BasicExample = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const onOpen = () => {
        setIsOpen(true);
    };
    const onClose = () => {
        setIsOpen(false);
    };
    return (
        <div>
            <button onClick={onOpen}>Open Modal</button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <button onClick={onClose}>Close</button>
                <h1
                    style={{ backgroundColor: 'saddlebrown', padding: '100px' }}
                ></h1>
            </Modal>
        </div>
    );
};

export default BasicExample;
