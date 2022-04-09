import NextHead from "../components/atoms/NextHead";
import GetInTouch from "../components/molecules/GetInTouch";
import Email from "../components/organisms/Email";
import styled from "styled-components";

export default function Contact() {
  return (
    <div>
      <NextHead
        title="Contact"
        content="Looking to launch a stylish yet functionable website? Jason Nembhard has got you covered."
      />
      <Wrapper>
        <GetInTouch />
        <Email />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.main`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      max-width: 1170px;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        max-width: 1440px;
      }
    }
  }
`;
