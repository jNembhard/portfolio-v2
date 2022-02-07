import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import styled from "styled-components";
import github from "../../public/assets/icons/github.svg";
import linkedin from "../../public/assets/icons/linkedin.svg";

const navLinks = [
  { name: "home", url: "/" },
  { name: "portfolio", url: "/portfolio" },
  { name: "contact me", url: "/contact" },
];

const socials = [
  { id: 1, name: "github", media: github, url: "https://github.com/jNembhard" },
  {
    id: 2,
    name: "linkedin",
    media: linkedin,
    url: "https://www.linkedin.com/in/jasonnembhard1/",
  },
];

export default function Footer() {
  return (
    <FooterWrap>
      <Container>
        <LogoContainer>
          <Link href="/">
            <a>
              <Logo src={logo} alt="Logo" />
            </a>
          </Link>
        </LogoContainer>
        <NavContainer>
          {navLinks.map(({ name, url }, index) => (
            <Link href={url} key={index}>
              <a>{name}</a>
            </Link>
          ))}
        </NavContainer>
        <SocialContainer>
          {socials.map((social) => (
            <a
              key={social.id}
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
            </a>
          ))}
        </SocialContainer>
      </Container>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  width: 100%;
  height: 354px;
  background-color: ${({ theme }) => theme.colors.grayishDarkBlue};
  font-family: "Public Sans", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    height: 80px;
  }
`;

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
    justify-content: center;
    width: 100%;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      max-width: 1170px;

      @media ${({ theme }) => theme.breakpoints.desktop} {
        max-width: 1440px;
      }
    }
  }
`;

const Logo = styled(Image)`
  filter: invert(100%) sepia(0%) saturate(169%) hue-rotate(155deg)
    brightness(101%) contrast(98%);
`;

const LogoContainer = styled.div`
  margin: 10px 34px 30px;
  width: 61px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 48px 0 20px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 0 48px 0 0;
    }
  }
`;

const NavContainer = styled.ul`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.veryLightGreyBG};
  padding: 0 7px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
    padding: unset;
    margin: 33px 0;
    width: 309px;
  }

  a {
    text-decoration: none;
    color: inherit;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 2px;
    margin: 0 7px 32px;

    @media ${({ theme }) => theme.breakpoints.tablet} {
      margin: 0 21px 0 0;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.desaturatedCyan};
    }
  }
`;

const SocialContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 65px;
  height: 24px;
  margin: 0 105px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
    margin: 28px 40px 28px 222px;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      margin: 28px 40px 28px 643px;
    }
  }
`;

const Socials = styled(Image)`
  filter: invert(100%) sepia(0%) saturate(169%) hue-rotate(155deg)
    brightness(101%) contrast(98%);
`;
