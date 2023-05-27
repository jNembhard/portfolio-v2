import { useEffect, useReducer, useState, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  titleVariant,
  formVariant,
  buttonVariant,
} from "../../src/animations/content";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import {
  initialState,
  validateInput,
  onInputChange,
  onFocusOut,
  formReducer,
  UPDATE_FORM,
  RESET_FORM,
} from "../../utils/validation";
import { AnimatePresence } from "framer-motion";
import Modal from "../molecules/Modal";

const StyledEmailWrap = styled.div`
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

const StyledContainer = styled.div`
  @media ${({ theme }) => theme.breakpoints.laptop} {
    display: flex;
    flex-direction: row;
    width: 69.375rem;
  }
`;
const StyledTitle = styled(motion.h1)`
  @media ${({ theme }) => theme.breakpoints.laptop} {
    width: 22.5rem;
  }
`;

const StyledLabel = styled.label`
  font-family: "Public Sans", sans-serif;
  font-weight: bold;
  font-size: 0.813rem;
  line-height: 1.875rem;
`;

const StyledForm = styled(motion.form)`
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

const StyledInput = styled.input`
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

const StyledTextArea = styled.textarea`
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

const StyledButtonWrapper = styled(motion.div)``;

const StyledButton = styled(motion.button)`
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

const StyledError = styled.small`
  font-family: "Public Sans", sans-serif;
  margin: -1.25rem 0 1.5rem;
  color: ${({ theme }) => theme.colors.brightRed};
  font-size: 0.625rem;
  font-weight: bold;
  font-style: italic;
`;

export default function Email() {
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const [showError, setShowError] = useState(false);
  const [show, setShow] = useState(false);
  const form = useRef();

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  });

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_YOUR_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID}`,
        form.current,
        `${process.env.NEXT_PUBLIC_YOUR_USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    let isFormValid = true;

    for (const name in formState) {
      const item = formState[name];
      const { value } = item;
      const { hasError, error } = validateInput(name, value);

      if (hasError) {
        isFormValid = false;
      }

      if (name) {
        dispatch({
          type: UPDATE_FORM,
          data: { name, value, hasError, error, touched: true, isFormValid },
        });
      }
    }

    !isFormValid
      ? setShowError(true)
      : dispatch({ type: RESET_FORM, data: initialState });

    !isFormValid ? setShow(false) : setShow(true);
  };

  return (
    <StyledEmailWrap>
      <StyledContainer ref={ref}>
        <StyledTitle
          animate={controls}
          initial="hidden"
          variants={titleVariant}
        >
          Contact Me
        </StyledTitle>
        <StyledForm
          animate={controls}
          initial="hidden"
          variants={formVariant}
          ref={form}
          onSubmit={sendEmail}
          autocomplete="off"
        >
          <StyledLabel htmlFor="fullname">Name</StyledLabel>
          <StyledInput
            id="fullname"
            name="fullname"
            type="text"
            placeholder="Jason Nembhard"
            className={formState.fullname.hasError ? "border-error" : ""}
            onChange={(e) => {
              onInputChange("fullname", e.target.value, dispatch, formState);
            }}
            aria-required="true"
            required
            onBlur={(e) => {
              onFocusOut("fullname", e.target.value, dispatch, formState);
            }}
            value={formState.fullname.value}
          />
          {formState.fullname.touched && formState.fullname.hasError && (
            <StyledError>{formState.fullname.error}</StyledError>
          )}

          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput
            id="email"
            type="email"
            name="email"
            placeholder="example@email.com"
            className={formState.email.hasError ? "border-error" : ""}
            onChange={(e) => {
              onInputChange("email", e.target.value, dispatch, formState);
            }}
            aria-required="true"
            required
            onBlur={(e) => {
              onFocusOut("email", e.target.value, dispatch, formState);
            }}
            value={formState.email.value}
          />
          {formState.email.touched && formState.email.hasError && (
            <StyledError>{formState.email.error}</StyledError>
          )}

          <StyledLabel htmlFor="message">Message</StyledLabel>
          <StyledTextArea
            id="message"
            name="message"
            rows="4"
            cols="50"
            placeholder="How can I help?"
            className={formState.message.hasError ? "border-error" : ""}
            onChange={(e) => {
              onInputChange("message", e.target.value, dispatch, formState);
            }}
            aria-required="true"
            required
            onBlur={(e) => {
              onFocusOut("message", e.target.value, dispatch, formState);
            }}
            value={formState.message.value}
          />
          {formState.message.touched && formState.message.hasError && (
            <StyledError>{formState.message.error}</StyledError>
          )}
          <StyledButtonWrapper
            animate={controls}
            initial="hidden"
            variants={buttonVariant}
          >
            <StyledButton
              className={
                formState.fullname.hasError ||
                formState.email.hasError ||
                formState.message.hasError
                  ? "disabled-button"
                  : ""
              }
              disabled={
                formState.fullname.hasError ||
                formState.email.hasError ||
                formState.message.hasError
              }
              formNoValidate="formnovalidate"
              type="submit"
              value="Send"
            >
              send message
            </StyledButton>
          </StyledButtonWrapper>
          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
            {show && <Modal onClose={() => setShow(false)} show={show} />}
          </AnimatePresence>
        </StyledForm>
      </StyledContainer>
    </StyledEmailWrap>
  );
}
