## Installation

```bash
npm i @sujonhossainbd/react-portal-modal
yarn add  @sujonhossainbd/react-portal-modal
```

## Examples

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
