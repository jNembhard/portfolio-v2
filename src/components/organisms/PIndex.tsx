import IndexProp from "../molecules/IndexProp";
import { portfoliodata } from "../../data/portfoliodata";
import ContactButton from "../atoms/ContactButton";
import styled from "styled-components";

const PIndexWrap = styled.div`
  @media ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${({ theme }) => theme.breakpoints.laptop} {
      justify-content: space-between;
    }
  }
`;

export default function PIndex() {
  return (
    <>
      <PIndexWrap>
        {portfoliodata.map((data, index) => (
          <IndexProp key={index} {...data} />
        ))}
      </PIndexWrap>
      <ContactButton />
    </>
  );
}
