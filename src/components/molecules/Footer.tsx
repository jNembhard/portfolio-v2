import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  logoVariant,
  navVariant,
  socialVariant,
} from "../../animations/content";
import { navLinks, socials } from "../../data/navigation";
import Link from "next/link";
import logo from "../../../public/assets/logo.svg";
import * as Styled from "../molecules/molecule-styled/StyledFooter";

const Footer = () => {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [ref2, inView2] = useInView({ threshold: 0.4 });
  const [ref3, inView3] = useInView({ threshold: 0.4 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visibleLogo");
    }
    if (inView2) {
      controls.start("visible");
    }
    if (inView3) {
      controls.start("visibleSocial");
    }
  });

  return (
    <Styled.FooterWrap>
      <Styled.Container ref={ref}>
        <Styled.LogoContainer
          animate={controls}
          initial="hidden"
          variants={logoVariant}
        >
          <Link href="/">
            <a>
              <Styled.Logo src={logo} alt="Logo" />
            </a>
          </Link>
        </Styled.LogoContainer>
        <Styled.NavContainer ref={ref2}>
          {navLinks.map(({ id, name, url }, i) => (
            <Styled.NavList
              key={id}
              initial="hidden"
              custom={i}
              animate={controls}
              variants={navVariant}
            >
              <Link href={url} passHref>
                <Styled.LinkList>{name}</Styled.LinkList>
              </Link>
            </Styled.NavList>
          ))}
        </Styled.NavContainer>
        <Styled.SocialContainer ref={ref3}>
          {socials.map((social, i) => (
            <motion.a
              key={social.id}
              initial="hidden"
              custom={i}
              animate={controls}
              variants={socialVariant}
              target="_blank"
              rel="noopener noreferrer"
              href={social.url}
            >
              <Styled.Socials
                key={social.id}
                src={social.media}
                width="24px"
                height="24px"
                alt={social.name}
              />
            </motion.a>
          ))}
        </Styled.SocialContainer>
      </Styled.Container>
    </Styled.FooterWrap>
  );
};

export default Footer;
