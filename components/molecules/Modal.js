import React, { useEffect } from "react";
import styled from "styled-components";
import Backdrop from "../atoms/Backdrop";
import { motion } from "framer-motion";

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
  const closeOnEsc = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEsc);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEsc);
    };
  }, []);

  if (!show) return null;

  return (
    <Backdrop onClick={onClose}>
      <ModalContent
        onClick={(e) => e.stopPropagation()}
        initial="hidden"
        animate="visible"
        variants={dropIn}
        exit="exit"
      >
        <ModalHeader>
          <Title>Thank You</Title>
        </ModalHeader>
        <Description>
          Your email has been received, I will get in touch with you shortly!
        </Description>
        <ButtonWrapper>
          <CloseButton onClick={onClose}>Close</CloseButton>
        </ButtonWrapper>
      </ModalContent>
    </Backdrop>
  );
}

const ModalContent = styled(motion.div)`
  width: 327px;
  height: 597px;
  margin: 0 35px;
  border-radius: 8px;
  background-color: white;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 540px;
    margin: 214px 0;
  }
`;

const ModalHeader = styled.div`
  border-radius: 8px 8px 0 0;
  background-color: ${({ theme }) => theme.colors.desaturatedCyan};
  text-align: center;
  padding: 20px;
  margin-bottom: 30px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 30px;
  }
`;
const Title = styled.h2`
  font-size: 28px;
  line-height: 32px;
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.grayishDarkBlue};
  background-color: transparent;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 150px 40px 56px;
    font-size: 40px;
    line-height: 48px;
    width: 380px;
  }
`;
const Description = styled.div`
  font-size: 25px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.grayishDarkBlue};
  margin: 0 24px 24px;
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 56px 47px;
    width: 428px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 47px 56px 56px;
  }
`;

const CloseButton = styled.button`
  font-family: "Public Sans", sans-serif;
  font-size: 12px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ theme }) => theme.colors.darkBlue};
  width: 200px;
  height: 48px;
  text-transform: uppercase;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.desaturatedCyan};
  }
`;
