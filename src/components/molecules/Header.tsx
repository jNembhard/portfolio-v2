import Image from "next/image";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { logoVariant } from "../../animations/content";
import logo from "../../../public/assets/logo.svg";
import Menu from "../atoms/Menu";
import BurgerNav from "../atoms/BurgerNav";
import * as Styled from "../../styles/styled-molecules/StyledHeader";

export default function Header() {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visibleLogo");
    }
  });

  return (
    <Styled.NavHeader>
      <Styled.Container ref={ref}>
        <Styled.LogoLink
          href="/"
          animate={controls}
          initial="hidden"
          variants={logoVariant}
        >
          <Image src={logo} alt="Logo" />
        </Styled.LogoLink>
        <BurgerNav />
        <Menu />
      </Styled.Container>
    </Styled.NavHeader>
  );
}
