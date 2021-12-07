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
        <Link href="/">
          <a>
            <Image src={logo} alt="Logo" />
          </a>
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
`;
const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
