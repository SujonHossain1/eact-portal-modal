import React, { FC, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: FC<Props> = ({ children, isOpen, onClose }) => {
    const bodyRef = useRef<HTMLElement | null>(null);
    const divRef = useRef<HTMLElement | null>(null);
    const [divCreated, setDivCreated] = useState<Boolean>(false);

    useEffect(() => {
        if (isOpen) {
            bodyRef.current = document.querySelector('body');
            divRef.current = document.createElement('div');
            divRef.current.classList.add('modal');
            bodyRef.current?.append(divRef.current);
            setDivCreated(true);
        }

        return () => {
            divRef.current?.remove();
            setDivCreated(false);
        };
    }, [isOpen]);

    const closeHandler = () => {
        onClose();
        divRef.current?.remove();
    };

    return divCreated && divRef.current
        ? ReactDOM.createPortal(
              <>
                  <div
                      style={{
                          position: 'fixed',
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          zIndex: 1000,
                      }}
                      className="overlay"
                      onClick={closeHandler}
                  ></div>
                  <div
                      style={{
                          position: 'fixed',
                          top: '50%',
                          left: '50%',
                          maxHeight: '400px',
                          width: '400px',
                          background: 'rgb(223, 221, 221)',
                          zIndex: 1000,
                          padding: '10px',
                          boxSizing: 'border-box',
                          transform: 'translate(-50%, -50%)',
                      }}
                      className={`modal-body  ${isOpen ? 'open' : 'close'} `}
                  >
                      {children}
                  </div>
              </>,
              divRef.current
          )
        : null;
};

export default Modal;
