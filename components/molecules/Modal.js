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
  width: 20.438rem;
  height: 37.313rem;
  margin: 0 2.188rem;
  border-radius: 0.5rem;
  background-color: white;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    width: 33.75rem;
    margin: 13.375rem 0;
  }
`;

const ModalHeader = styled.div`
  border-radius: 0.5rem 0.5rem 0 0;
  background-color: ${({ theme }) => theme.colors.desaturatedCyan};
  text-align: center;
  padding: 1.25rem;
  margin-bottom: 1.875rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 1.875rem;
  }
`;
const Title = styled.h2`
  font-size: 1.75rem;
  line-height: 2rem;
  margin-top: 1.875rem;
  color: ${({ theme }) => theme.colors.grayishDarkBlue};
  background-color: transparent;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 9.375rem 2.5rem 3.5rem;
    font-size: 2.5rem;
    line-height: 3rem;
    width: 23.75rem;
  }
`;
const Description = styled.div`
  font-size: 1.563rem;
  line-height: 1.563rem;
  color: ${({ theme }) => theme.colors.grayishDarkBlue};
  margin: 0 1.5rem 1.5rem;
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 3.5rem 2.938rem;
    width: 26.75rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 2.938rem 3.5rem 3.5rem;
  }
`;

const CloseButton = styled.button`
  font-family: "Public Sans", sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.125rem;
  color: ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ theme }) => theme.colors.darkBlue};
  width: 12.5rem;
  height: 3rem;
  text-transform: uppercase;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.desaturatedCyan};
  }
`;
