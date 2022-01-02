import IndexProp from "../molecules/IndexProp";
import { portfoliodata } from "../../data/portfoliodata";
import ContactButton from "../atoms/ContactButton";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styled from "styled-components";

export default function PIndex() {
  const breakPoint1200 = useMediaQuery(`(min-width: 1200px)`);
  const breakPoint767 = useMediaQuery(`(min-width: 767px)`);

  return (
    <>
      <PIndexWrap>
        {portfoliodata.map((data, index) => (
          <IndexProp
            key={index}
            id={data.id}
            name={data.name}
            slug={data.slug}
            image={
              breakPoint1200
                ? data.images.index.desktop
                : breakPoint767
                ? data.images.index.tablet
                : data.images.index.mobile
            }
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
