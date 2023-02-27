import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { navVariant } from "../../animations/content";
import { navLinks } from "../../data/navigation";
import Link from "next/link";
import styled from "styled-components";

export default function Menu() {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  });

  return (
    <>
      <MenuWrapper ref={ref}>
        <MenuLinks>
          {navLinks.map(({ id, name, url }, i) => (
            <motion.li
              key={id}
              className="second-color"
              initial="hidden"
              custom={i}
              animate="visible"
              variants={navVariant}
            >
              <Link href={url}>
                <a>{name}</a>
              </Link>
            </motion.li>
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
    margin-left: 16.25rem;
  }
`;

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
