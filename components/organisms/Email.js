import React, { useReducer, useState } from "react";
import styled from "styled-components";
import {
  initialState,
  validateInput,
  onInputChange,
  onFocusOut,
  formReducer,
  UPDATE_FORM,
  RESET_FORM,
} from "../../utils/validation";

export default function Email() {
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

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
  };
  return (
    <EmailWrap>
      <Container>
        <Title>Contact Me</Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="fullname">Name</Label>
          <Input
            id="fullname"
            name="fullname"
            type="text"
            placeholder="Jane Appleseed"
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
            <Error>{formState.fullname.error}</Error>
          )}

          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="email@example.com"
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
            <Error>{formState.email.error}</Error>
          )}

          <Label htmlFor="message">Message</Label>
          <TextArea
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
            <Error>{formState.message.error}</Error>
          )}

          <Button
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
          >
            send message
          </Button>
        </Form>
      </Container>
    </EmailWrap>
  );
}

const EmailWrap = styled.div`
  margin: 0 32px 80px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 689px;
    width: 689px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 0 0 109px;
      width: 1110px;
      max-width: 1110px;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        margin: 0 165px 109px;
      }
    }
  }

  .border-error {
    border: 1px solid ${({ theme }) => theme.colors.brightRed};
    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.brightRed};
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

const Container = styled.div`
  @media ${({ theme }) => theme.breakpoints.laptop} {
    display: flex;
    flex-direction: row;
    width: 1110px;
  }
`;
const Title = styled.h1`
  @media ${({ theme }) => theme.breakpoints.laptop} {
    width: 360px;
  }
`;

const Label = styled.label`
  font-family: "Public Sans";
  font-weight: bold;
  font-size: 13px;
  line-height: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    width: 1110px;
    max-width: 1110px;
    padding-left: 145px;
    margin-top: 20px;

    @media ${({ theme }) => theme.breakpoints.desktop} {
      width: 1110px;
      max-width: 1110px;
    }
  }
`;

const Input = styled.input`
  border: 0;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  height: 48px;
  text-indent: 16px;
  margin-bottom: 24px;
  font-size: 13px;
  border: none;

  &:focus {
    outline: 1px solid transparent;
    border: 1px solid ${({ theme }) => theme.colors.desaturatedCyan};
  }
`;

const TextArea = styled.textarea`
  font-family: "Public Sans";
  font-size: 13px;
  height: 96px;
  line-height: 30px;
  text-indent: 16px;
  margin-bottom: 24px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border: 0;
  resize: none;

  &:focus {
    outline: 1px solid transparent;
    border: 1px solid ${({ theme }) => theme.colors.desaturatedCyan};
  }
`;

const Button = styled.button`
  font-family: "Public Sans";
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

const Error = styled.small`
  font-family: "Public Sans";
  margin: -20px 0 24px;
  color: ${({ theme }) => theme.colors.brightRed};
  font-size: 10px;
  font-weight: bold;
  font-style: italic;
`;
