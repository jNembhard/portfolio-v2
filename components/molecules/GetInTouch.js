import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import github from "../../public/assets/icons/github.svg";
import linkedin from "../../public/assets/icons/linkedin.svg";
import twitter from "../../public/assets/icons/twitter.svg";

const socials = [
  { id: 1, name: "github", media: github },
  { id: 2, name: "twitter", media: twitter },
  { id: 3, name: "linkedin", media: linkedin },
];

export default function GetInTouch() {
  return (
    <ContactWrap>
      <Container>
        <Title>Get In Touch</Title>
        <Description>
          I’d love to hear about what you’re working on and how I could help.
          I’m currently looking for a new role and am open to a wide range of
          opportunities. My preference would be to find a position in a company
          in the US. But I’m also happy to hear about opportunites that don’t
          fit that description. I’m a hard-working and positive person who will
          always approach each task with a sense of purpose and attention to
          detail. Please do feel free to check out my online profiles below and
          get in touch using the form.
        </Description>
        <SocialContainer>
          {socials.map((social) => (
            <Socials
              key={social.id}
              src={social.media}
              width="24px"
              height="24px"
              alt={social.name}
            />
          ))}
        </SocialContainer>
      </Container>
    </ContactWrap>
  );
}

const ContactWrap = styled.div`
  margin: 40px 32px;
`;
const Container = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;
const Title = styled.h1``;
const Description = styled.p`
  margin-bottom: 24px;
`;

const SocialContainer = styled.div`
  display: inline-flex;
  align-items: left;
  justify-content: space-between;
  width: 120px;
  height: 24px;
  margin-bottom: 24px;
`;
const Socials = styled(Image)``;
