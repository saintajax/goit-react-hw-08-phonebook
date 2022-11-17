import { createPortal } from 'react-dom';
import { RotatingLines } from 'react-loader-spinner';
import { Overlay } from './Loader.styled';

const modalRoot = document.querySelector('#modal-root');

export const Loader = () => {
  return createPortal(
    <Overlay>
      <RotatingLines
        strokeColor="white"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Overlay>,
    modalRoot
  );
};
