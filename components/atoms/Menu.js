import Link from "next/link";
import styled from "styled-components";

const navLinks = [
  { name: "home", url: "/" },
  { name: "portfolio", url: "/portfolio" },
  { name: "contact me", url: "/contact" },
];

export default function Menu() {
  return (
    <>
      <MenuWrapper>
        <MenuLinks>
          {navLinks.map(({ name, url }, index) => (
            <li className="second-color" key={index}>
              <Link href={url}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </MenuLinks>
      </MenuWrapper>
    </>
  );
}

const MenuWrapper = styled.div`
  display: none;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-family: "Public Sans", sans-serif;
    display: flex;
    text-transform: uppercase;
    justify-content: space-between;
    margin-left: 260px;
  }
`;

const MenuLinks = styled.ul`
  display: none;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    color: ${({ theme }) => theme.colors.grayishDarkBlue};
    display: inline-flex;
    justify-content: space-between;
    font-size: 12px;
    letter-spacing: 2px;
    width: 300px;
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
