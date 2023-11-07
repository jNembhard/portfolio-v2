import IndexProp from "../molecules/IndexProp";
import ContactButton from "../atoms/ContactButton";
import styled from "styled-components";
import { IPortfolioHome } from "../../interfaces/Portfolio";
import extractNumbers from "../../utils/extractNumbers";

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

const PIndex = ({ portfolios }: { portfolios: IPortfolioHome[] }) => {
  const projects = [...portfolios];

  projects.sort((a: IPortfolioHome, b: IPortfolioHome) => {
    const aLast = extractNumbers(a.portfolioID);
    const bLast = extractNumbers(b.portfolioID);

    return aLast - bLast;
  });

  const items = projects.slice(0, 10);

  return (
    <>
      <PIndexWrap>
        {items.map((project: IPortfolioHome) => (
          <IndexProp key={project.portfolioID} {...project} />
        ))}
      </PIndexWrap>
      <ContactButton />
    </>
  );
};

export default PIndex;
