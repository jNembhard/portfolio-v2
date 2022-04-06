import { useEffect, useState, useRef } from "react";
import { Squash as Hamburger } from "hamburger-react";
import styled from "styled-components";
import Image from "next/image";
import openIcon from "../../public/assets/icons/hamburger.svg";
import closeIcon from "../../public/assets/icons/close.svg";
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
  const getImageName = () => (modalOpen ? closeIcon : openIcon);

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
        {/* <Image onClick={() => toggle()} src={getImageName()} alt="" /> */}
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
  width: 223px;
  height: 186px;
  background-color: ${({ theme }) => theme.colors.grayishDarkBlue};
  position: absolute;
  top: 88px;
  right: 32px;
  transform: ${(props) =>
    props.modalOpen ? "translateY(0)" : "translateY(-150%)"};
  transition: transform 0.2s ease-in-out;
  z-index: 1;

  ul {
    font-family: "Public Sans", sans-serif;
    letter-spacing: 2px;
    font-size: 12px;
    list-style-type: none;
    color: ${({ theme }) => theme.colors.lightGrey};
    text-transform: uppercase;
    margin: 0 26px;
    margin-top: 20px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;

    li {
      margin: 16px 0;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;
