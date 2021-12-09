import React, { FC, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

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
          <div className="overlay" onClick={closeHandler}></div>
          <div className={`modal-body  ${isOpen ? 'open' : 'close'} `}>
            {children}
          </div>
        </>,
        divRef.current
      )
    : null;
};

export default Modal;
