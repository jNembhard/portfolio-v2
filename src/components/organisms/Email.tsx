import { useEffect, useReducer, useState, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  titleVariant,
  formVariant,
  buttonVariant,
} from "../../animations/content";
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
import * as Styled from "../../styles/styled-organisms/StyledEmail";

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
    <Styled.EmailWrap>
      <Styled.Container ref={ref}>
        <Styled.Title
          animate={controls}
          initial="hidden"
          variants={titleVariant}
        >
          Contact Me
        </Styled.Title>
        <Styled.Form
          animate={controls}
          initial="hidden"
          variants={formVariant}
          ref={form}
          onSubmit={sendEmail}
          autoComplete="off"
        >
          <Styled.Label htmlFor="fullname">Name</Styled.Label>
          <Styled.Input
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
            <Styled.Error>{formState.fullname.error}</Styled.Error>
          )}

          <Styled.Label htmlFor="email">Email</Styled.Label>
          <Styled.Input
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
            <Styled.Error>{formState.email.error}</Styled.Error>
          )}

          <Styled.Label htmlFor="message">Message</Styled.Label>
          <Styled.TextArea
            id="message"
            name="message"
            rows={4}
            cols={50}
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
            <Styled.Error>{formState.message.error}</Styled.Error>
          )}
          <Styled.ButtonWrapper
            animate={controls}
            initial="hidden"
            variants={buttonVariant}
          >
            <Styled.Button
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
              formNoValidate={true}
              type="submit"
              value="Send"
            >
              send message
            </Styled.Button>
          </Styled.ButtonWrapper>
          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
            {show && <Modal onClose={() => setShow(false)} show={show} />}
          </AnimatePresence>
        </Styled.Form>
      </Styled.Container>
    </Styled.EmailWrap>
  );
}
