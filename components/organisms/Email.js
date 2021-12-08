import styled from "styled-components";

export default function Email() {
  const registerUser = (event) => {
    event.preventDefault();
  };
  return (
    <EmailWrap>
      <Container>
        <Title>Contact Me</Title>
        <Form onSubmit={registerUser}>
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="Jane Appleseed" />
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="text" placeholder="email@example.com" />
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            rows="4"
            cols="50"
            placeholder="How can I help?"
          />
          <Button type="submit">send message</Button>
        </Form>
      </Container>
    </EmailWrap>
  );
}

const EmailWrap = styled.div`
  margin: 0 32px 80px;
`;
const Container = styled.div``;
const Title = styled.h1``;

const Label = styled.label`
  font-family: "Public Sans";
  font-weight: bold;
  font-size: 13px;
  line-height: 30px;
`;

const Form = styled.form`
  /* display: flex; */
`;

const Input = styled.input`
  width: 311px;
  border: 0;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  height: 48px;
  text-indent: 16px;
  margin-bottom: 24px;
  font-size: 13px;
`;

const TextArea = styled.textarea`
  font-family: "Public Sans";
  font-size: 13px;
  height: 96px;
  line-height: 30px;
  width: 311px;
  text-indent: 16px;
  margin-bottom: 24px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border: 0;
  resize: none;
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
