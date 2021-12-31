import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import logo from "../../public/assets/logo.svg";
import Menu from "../atoms/Menu";
import BurgerNav from "../atoms/BurgerNav";

export default function Header() {
  return (
    <NavHeader>
      <Container>
        <Link href="/" passHref>
          <ATag>
            <Image src={logo} alt="Logo" />
          </ATag>
        </Link>
        <BurgerNav />
        <Menu />
      </Container>
    </NavHeader>
  );
}

const NavHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px 32px 40px 32px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 64px 40px 47px;

    @media ${({ theme }) => theme.breakpoints.desktop} {
      margin: 64px 165px 54px;
    }
  }
`;
const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1800px;
`;

const ATag = styled.a`
  min-width: 10%;
`;
