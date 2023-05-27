import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  titleVariant,
  descriptionVariant,
  socialVariantTwo,
} from "../../src/animations/content";
import { socials } from "../../src/data/navigation";
import * as Styled from "./molecule-styled/GetInTouchStyles";

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
    <Styled.ContactWrap>
      <Styled.Container ref={ref}>
        <Styled.Title
          animate={controls}
          initial="hidden"
          variants={titleVariant}
        >
          Get In Touch
        </Styled.Title>
        <Styled.SummaryContainer>
          <Styled.Description
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
          </Styled.Description>
          <Styled.SocialContainer ref={ref2}>
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
                <Styled.Socials
                  key={social.id}
                  src={social.media}
                  width="1.5rem"
                  height="1.5rem"
                  alt={social.name}
                />
              </motion.a>
            ))}
          </Styled.SocialContainer>
        </Styled.SummaryContainer>
      </Styled.Container>
    </Styled.ContactWrap>
  );
}
