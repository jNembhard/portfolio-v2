import styled from "styled-components";

const BurgerWrap = styled.div`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;

const BurgerContainer = styled.div`
  cursor: pointer;
`;

interface Props {
  modalOpen: boolean;
}

const SideBarContainer = styled.div<Props>`
  width: 13.938rem;
  height: 11.625rem;
  background-color: ${({ theme }) => theme.colors.grayishDarkBlue};
  position: absolute;
  top: 5.5rem;
  right: 2rem;
  transform: ${(props) =>
    props.modalOpen ? "translateY(0)" : "translateY(-150%)"};
  transition: transform 0.2s ease-in-out;
  z-index: 1;

  ul {
    font-family: "Public Sans", sans-serif;
    letter-spacing: 0.125rem;
    font-size: 0.75rem;
    list-style-type: none;
    color: ${({ theme }) => theme.colors.lightGrey};
    text-transform: uppercase;
    margin: 0 1.625rem;
    margin-top: 1.25rem;
    display: inline-flex;
    flex-direction: column;
    align-items: center;

    li {
      margin: 1rem 0;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;

export { BurgerContainer, BurgerWrap, SideBarContainer };
