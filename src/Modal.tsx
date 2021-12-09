import React, { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<Props> = ({ children, isOpen, onClose }) => {
  const [isClose, setIsClose] = useState<boolean>(false);

  const body = useRef<HTMLElement | null>(null);
  const div = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    body.current = document.body;
    div.current = document.createElement('div');
    div.current.setAttribute('id', 'modal');

    return () => {
      div.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsClose(false);
    }
  }, [isOpen]);

  if (isOpen) {
    body.current?.prepend(div.current as HTMLElement);
    console.log('render', { isOpen: isOpen });
  }

  const closeHandler = () => {
    setIsClose(true);

    setTimeout(() => {
      onClose();
      div.current?.remove();
    }, 700);
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className="overlay" onClick={closeHandler}></div>
      <div className={`modal  ${!isClose ? 'open' : 'close'} `}>
        <button
          style={{ display: 'block', marginTop: '20px' }}
          onClick={closeHandler}
        >
          Close Modal
        </button>
        {children}
      </div>
    </>,
    document.getElementById('modal') as Element
  );
};

export default Modal;
