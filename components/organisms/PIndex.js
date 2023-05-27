import IndexProp from "../molecules/IndexProp";
import { portfoliodata } from "../../src/data/portfoliodata";
import ContactButton from "../atoms/ContactButton";
import styled from "styled-components";

export default function PIndex() {
  return (
    <>
      <PIndexWrap>
        {portfoliodata.map((data, index) => (
          <IndexProp
            key={index}
            id={data.id}
            name={data.name}
            slug={data.slug}
            image={data.images.index.desktop}
            description={data.description}
          />
        ))}
      </PIndexWrap>
      <ContactButton />
    </>
  );
}

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
