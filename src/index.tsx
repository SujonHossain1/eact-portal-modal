import React, { FC, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Draggable } from './components/Draggable';
import styles from './style/style.module.css';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    customStyles?: React.CSSProperties;
    isOverlay?: boolean;
    isDraggable?: boolean;
}

const Modal: FC<Props> = ({
    children,
    isOpen,
    onClose,
    customStyles,
    isOverlay = true,
    isDraggable = false,
}) => {
    const bodyRef = useRef<HTMLElement | null>(null);
    const divRef = useRef<HTMLElement | null>(null);
    const [divCreated, setDivCreated] = useState<Boolean>(false);

    const overlayStyle = {
        backgroundColor: isOverlay ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
    };

    useEffect(() => {
        if (isOpen) {
            bodyRef.current = document.querySelector('body');
            divRef.current = document.createElement('div');
            divRef.current.classList.add('ReactPortalDialog');
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
                      style={overlayStyle}
                      className={styles.ReactPortalDialog__Overlay}
                      onClick={closeHandler}
                  />

                  {isDraggable ? (
                      <Draggable>{children}</Draggable>
                  ) : (
                      <div
                          style={customStyles}
                          className={styles.ReactPortalDialog__Body}
                      >
                          {children}
                      </div>
                  )}
              </>,
              divRef.current
          )
        : null;
};

export default Modal;
