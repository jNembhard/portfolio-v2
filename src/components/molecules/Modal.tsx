import { useEffect } from "react";
import Backdrop from "../atoms/Backdrop";
import * as Styled from "../../styles/styled-molecules/StyledModal";

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { duration: 0.1, type: "spring", damping: 25, stiffness: 500 },
    exit: { y: "100vh", opacity: 0 },
  },
};

export default function Modal({ onClose, show }) {
  const closeOnEsc = (e: any) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEsc);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEsc);
    };
  });

  if (!show) return null;

  return (
    <Backdrop onClick={onClose}>
      <Styled.ModalContent
        onClick={(e) => e.stopPropagation()}
        initial="hidden"
        animate="visible"
        variants={dropIn}
        exit="exit"
      >
        <Styled.ModalHeader>
          <Styled.Title>Thank You</Styled.Title>
        </Styled.ModalHeader>
        <Styled.Description>
          Your email has been received, I will get in touch with you shortly!
        </Styled.Description>
        <Styled.ButtonWrapper>
          <Styled.CloseButton onClick={onClose}>Close</Styled.CloseButton>
        </Styled.ButtonWrapper>
      </Styled.ModalContent>
    </Backdrop>
  );
}
