import React, { FC, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import {
    modalBodyStyleDefault,
    overlayStyleDefault,
} from './components/defaultStyle';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    overlayStyle?: React.CSSProperties;
    modalBodyStyle?: React.CSSProperties;
}

const Modal: FC<Props> = ({
    children,
    isOpen,
    onClose,
    overlayStyle: overlayStyleProps,
    modalBodyStyle: modalBodyStyleProps,
}) => {
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

    const overlayStyle = overlayStyleProps || overlayStyleDefault;
    const modalBodyStyle = modalBodyStyleProps || modalBodyStyleDefault;

    return divCreated && divRef.current
        ? ReactDOM.createPortal(
              <>
                  <div
                      style={overlayStyle}
                      className="modal"
                      onClick={closeHandler}
                  ></div>
                  <div
                      style={modalBodyStyle}
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
