import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { navVariant } from "../../animations/content";
import { navLinks } from "../../data/navigation";
import Link from "next/link";
import * as Styled from "./styled-atoms/StyledMenu";

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
      <Styled.MenuWrapper ref={ref}>
        <Styled.MenuLinks>
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
        </Styled.MenuLinks>
      </Styled.MenuWrapper>
    </>
  );
}
