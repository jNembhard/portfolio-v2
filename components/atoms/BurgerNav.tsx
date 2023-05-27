import { useEffect, useState, useRef } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import useOutsideClick from "../../src/hooks/useOutsideClick";
import * as Styled from "./styled-atoms/StyledBurgerNav";

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
    <Styled.BurgerWrap>
      <Styled.BurgerContainer>
        <Hamburger
          color="#33323D"
          toggled={modalOpen}
          toggle={() => toggle()}
        />
      </Styled.BurgerContainer>
      <Styled.SideBarContainer ref={ref} modalOpen={modalOpen}>
        <ul>
          {navLinks.map(({ name, url }, index) => (
            <li key={index}>
              <Link href={url}>
                <a onClick={() => toggle()}>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Styled.SideBarContainer>
    </Styled.BurgerWrap>
  );
}
