import type { NextPage } from "next";
import SEO from "../components/atoms/SEO";
import GetInTouch from "../components/molecules/GetInTouch";
import Email from "../components/organisms/Email";
import styled from "styled-components";

const StyledWrapper = styled.main`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      max-width: 73.125rem;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        max-width: 90rem;
      }
    }
  }
`;

const Contact: NextPage = () => {
  return (
    <div>
      <SEO
        title="Contact"
        metadescription="Get in touch with Jason Nembhard to get started on your latest Front End and Web Development projects."
        type="webapp"
      />
      <StyledWrapper>
        <GetInTouch />
        <Email />
      </StyledWrapper>
    </div>
  );
};

export default Contact;
