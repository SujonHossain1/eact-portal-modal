import * as React from 'react';
import Modal from '../src/index';

const modalBodyStyleDefault: React.CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    maxHeight: '490px',
    width: '200px',
    background: 'deeppink',
    zIndex: '1000',
    padding: '10px',
    transform: 'translate(-50%, -50%)',
};

const Example = () => {
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
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                // modalBodyStyle={modalBodyStyleDefault}
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
