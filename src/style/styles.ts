import React from 'react';

export const ReactPortalDialog__Overlay: React.CSSProperties = {
    position: 'fixed',
    inset: '0',
    zIndex: '1000',
};

export const ReactPortalDialog__Body: React.CSSProperties = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    maxHeight: '200px',
    width: '400px',
    backgroundColor: 'rgb(223, 221, 221)',
    zIndex: '1000',
    transform: 'translate(-50%, -50%)',
};

export const ReactPortalDialog__Move: React.CSSProperties = {
    backgroundColor: 'salmon',
    textAlign: 'center',
    padding: '5px',
    cursor: 'move',
};
