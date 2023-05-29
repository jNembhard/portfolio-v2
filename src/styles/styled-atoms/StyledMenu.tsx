import styled from "styled-components";

const MenuLinks = styled.ul`
  display: none;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    color: ${({ theme }) => theme.colors.grayishDarkBlue};
    display: inline-flex;
    justify-content: space-between;
    font-size: 0.75rem;
    letter-spacing: 0.125rem;
    width: 18.75rem;
    list-style-type: none;

    a {
      text-decoration: none;
      color: inherit;

      &.active,
      &:hover {
        color: ${({ theme }) => theme.colors.desaturatedCyan};
      }
    }
  }
`;

const MenuWrapper = styled.div`
  display: none;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-family: "Public Sans", sans-serif;
    display: flex;
    text-transform: uppercase;
    justify-content: space-between;
    margin-left: 16.25rem;
  }
`;

export { MenuLinks, MenuWrapper };
