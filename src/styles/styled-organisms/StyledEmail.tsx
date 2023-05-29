import styled from "styled-components";
import { motion } from "framer-motion";

const ButtonWrapper = styled(motion.div)``;

const Button = styled(motion.button)`
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

const Container = styled.div`
  @media ${({ theme }) => theme.breakpoints.laptop} {
    display: flex;
    flex-direction: row;
    width: 69.375rem;
  }
`;

const EmailWrap = styled.div`
  margin: 0 2rem 5rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 43.063rem;
    width: 43.063rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 0 0 6.813rem;
      width: 69.375rem;
      max-width: 69.375rem;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        margin: 0 10.313rem 6.813rem;
      }
    }
  }

  .border-error {
    border: 0.063rem solid ${({ theme }) => theme.colors.brightRed};
    &:focus {
      border: 0.063rem solid ${({ theme }) => theme.colors.brightRed};
    }
  }

  .disabled-button {
    opacity: 0.2;
    cursor: not-allowed;

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkBlue};
    }
  }
`;

const Error = styled.small`
  font-family: "Public Sans", sans-serif;
  margin: -1.25rem 0 1.5rem;
  color: ${({ theme }) => theme.colors.brightRed};
  font-size: 0.625rem;
  font-weight: bold;
  font-style: italic;
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    width: 69.375rem;
    max-width: 69.375rem;
    padding-left: 9.063rem;
    margin-top: 1.25rem;

    @media ${({ theme }) => theme.breakpoints.desktop} {
      width: 69.375rem;
      max-width: 69.375rem;
    }
  }
`;

const Input = styled.input`
  border: 0;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  height: 3rem;
  text-indent: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.813rem;
  border: none;

  &:focus {
    outline: 0.063rem solid transparent;
    border: 0.063rem solid ${({ theme }) => theme.colors.desaturatedCyan};
  }
`;

const Label = styled.label`
  font-family: "Public Sans", sans-serif;
  font-weight: bold;
  font-size: 0.813rem;
  line-height: 1.875rem;
`;

const TextArea = styled.textarea`
  font-family: "Public Sans", sans-serif;
  font-size: 0.813rem;
  height: 6rem;
  line-height: 1.875rem;
  text-indent: 1rem;
  margin-bottom: 1.5rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border: 0;
  resize: none;

  &:focus {
    outline: 0.063rem solid transparent;
    border: 0.063rem solid ${({ theme }) => theme.colors.desaturatedCyan};
  }
`;

const Title = styled(motion.h1)`
  @media ${({ theme }) => theme.breakpoints.laptop} {
    width: 22.5rem;
  }
`;

export {
  ButtonWrapper,
  Button,
  Container,
  EmailWrap,
  Error,
  Form,
  Input,
  Label,
  TextArea,
  Title,
};
