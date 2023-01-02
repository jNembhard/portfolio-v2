import SEO from "../components/atoms/SEO";
import GetInTouch from "../components/molecules/GetInTouch";
import Email from "../components/organisms/Email";
import styled from "styled-components";

export default function Contact() {
  return (
    <div>
      <SEO
        title="Contact"
        metadescription="Get in touch with Jason Nembhard to get started on your latest Front End and Web Development projects."
        type="webapp"
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
