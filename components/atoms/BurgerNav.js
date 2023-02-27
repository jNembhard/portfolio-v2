import { useEffect, useState, useRef } from "react";
import { Squash as Hamburger } from "hamburger-react";
import styled from "styled-components";
import Link from "next/link";
import useOutsideClick from "../../hooks/useOutsideClick";

const navLinks = [
  { name: "home", url: "/" },
  { name: "portfolio", url: "/portfolio" },
  { name: "contact me", url: "/contact" },
];

export default function BurgerNav() {
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (modalOpen) setModalOpen(false);
  });

  const toggle = () => setModalOpen(!modalOpen);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = modalOpen ? "hidden" : "unset";
  });

  return (
    <BurgerWrap>
      <BurgerContainer>
        <Hamburger
          color="#33323D"
          toggled={modalOpen}
          toggle={() => toggle()}
        />
      </BurgerContainer>
      <SideBarContainer ref={ref} modalOpen={modalOpen}>
        <ul>
          {navLinks.map(({ name, url }, index) => (
            <li key={index}>
              <Link href={url}>
                <a onClick={() => toggle()}>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </SideBarContainer>
    </BurgerWrap>
  );
}

const BurgerWrap = styled.div`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: none;
  }
`;

const BurgerContainer = styled.div`
  cursor: pointer;
`;

const SideBarContainer = styled.div`
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
