import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  titleVariant,
  descriptionVariant,
  socialVariantTwo,
} from "../../animations/content";
import { socials } from "../../data/navigation";
import Image from "next/image";
import styled from "styled-components";

export default function GetInTouch() {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [ref2, inView2] = useInView({ threshold: 0.4 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (inView2) {
      controls.start("visibleSocial");
    }
  });

  return (
    <ContactWrap>
      <Container ref={ref}>
        <Title animate={controls} initial="hidden" variants={titleVariant}>
          Get In Touch
        </Title>
        <SummaryContainer>
          <Description
            animate={controls}
            initial="hidden"
            variants={descriptionVariant}
          >
            I&#39;d love to hear about what you&#39;re working on and how I
            could help. I&#39;m open to a wide range of opportunities including
            freelance projects and new full-time roles. My preference would be
            to find a position in a company in the US. But I&#39;m also happy to
            hear about opportunites that don&#39;t fit that description. I&#39;m
            a hard-working and positive person who will always approach each
            task with a sense of purpose and attention to detail. Please do feel
            free to check out my online profiles below and get in touch using
            the form.
          </Description>
          <SocialContainer ref={ref2}>
            {socials.map((social, i) => (
              <motion.a
                key={social.id}
                initial="hidden"
                custom={i}
                animate={controls}
                variants={socialVariantTwo}
                target="_blank"
                rel="noopener noreferrer"
                href={social.url}
              >
                <Socials
                  key={social.id}
                  src={social.media}
                  width="24px"
                  height="24px"
                  alt={social.name}
                />
              </motion.a>
            ))}
          </SocialContainer>
        </SummaryContainer>
      </Container>
    </ContactWrap>
  );
}

const ContactWrap = styled.div`
  margin: 40px 32px;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    margin: 47px 100px;
    width: 900px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 47px 165px;
      width: 1110px;
      max-width: 1110px;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        margin: 47px 165px;
        width: 1110px;
        max-width: 1110px;
      }
    }
  }
`;

const Container = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};

  @media ${({ theme }) => theme.breakpoints.laptop} {
    display: flex;
    padding: 48px 0;
  }
`;

const SummaryContainer = styled.div`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 689px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      max-width: 635px;
      margin-left: 145px;
      margin-top: 10px;
    }
  }
`;

const Title = styled(motion.h1)``;

const Description = styled(motion.p)`
  margin-bottom: 24px;
`;

const SocialContainer = styled.div`
  display: inline-flex;
  align-items: left;
  justify-content: space-between;
  width: 65px;
  height: 24px;
  margin-bottom: 24px;
`;

const Socials = styled(Image)``;
