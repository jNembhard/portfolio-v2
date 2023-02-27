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
                  width="1.5rem"
                  height="1.5rem"
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
  margin: 2.5rem 2rem;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    margin: 2.938rem 6.25rem;
    width: 56.25rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 2.938rem 10.313rem;
      width: 69.375rem;
      max-width: 69.375rem;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        margin: 2.938rem 10.313rem;
        width: 69.375rem;
        max-width: 69.375rem;
      }
    }
  }
`;

const Container = styled.div`
  border-top: 0.063rem solid ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 0.063rem solid ${({ theme }) => theme.colors.lightGrey};

  @media ${({ theme }) => theme.breakpoints.laptop} {
    display: flex;
    padding: 3rem 0;
  }
`;

const SummaryContainer = styled.div`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 43.063rem;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      max-width: 39.688rem;
      margin-left: 9.063rem;
      margin-top: 0.625rem;
    }
  }
`;

const Title = styled(motion.h1)``;

const Description = styled(motion.p)`
  margin-bottom: 1.5rem;
`;

const SocialContainer = styled.div`
  display: inline-flex;
  align-items: left;
  justify-content: space-between;
  width: 4.063rem;
  height: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Socials = styled(Image)``;
