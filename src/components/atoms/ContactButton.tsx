import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  titleVariant,
  lineVariant,
  buttonVariant,
} from "../../animations/content";
import * as Styled from "../../styles/styled-atoms/StyledContactButton";

export default function ContactButton() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  });

  return (
    <Styled.Container ref={ref}>
      <Styled.Title animate={controls} initial="hidden" variants={titleVariant}>
        Interested in doing a project together?
      </Styled.Title>
      <Styled.Line animate={controls} initial="hidden" variants={lineVariant} />

      <Styled.LinkButtonWrap href="/contact">
        <Styled.Button
          animate={controls}
          initial="hidden"
          variants={buttonVariant}
        >
          contact me
        </Styled.Button>
      </Styled.LinkButtonWrap>
    </Styled.Container>
  );
}
