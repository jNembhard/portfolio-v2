import { useEffect, useState, useRef } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import useOutsideClick from "../../../src/hooks/useOutsideClick";
import * as Styled from "../../styles/styled-atoms/StyledBurgerNav";
import { useOnClickOutside } from "usehooks-ts";

const navLinks = [
  { name: "home", url: "/" },
  { name: "portfolio", url: "/portfolio" },
  { name: "contact me", url: "/contact" },
];

export default function BurgerNav() {
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => {
    if (modalOpen) setModalOpen(false);
  });

  const toggle = () => setModalOpen(!modalOpen);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = modalOpen ? "hidden" : "unset";
  });

  return (
    <Styled.BurgerWrap ref={ref}>
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
                <div onClick={() => toggle()}>{name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </Styled.SideBarContainer>
    </Styled.BurgerWrap>
  );
}
