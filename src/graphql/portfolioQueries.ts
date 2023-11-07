import { gql } from "@apollo/client";

export const GET_PORTFOLIO = gql`
  query getPortfolio($portfolioID: String!) {
    portfolio(portfolioID: $portfolioID) {
      description
      images {
        detailhero {
          blurDataUrl
          picture
        }
        index {
          blurDataUrl
          picture
        }
        preview {
          previewOne {
            blurDataUrl
            picture
          }
          previewTwo {
            blurDataUrl
            picture
          }
        }
      }
      previous
      projBackground
      slug
      sources {
        github
        website
      }
      subGreen
      title
    }
  }
`;

export const GET_PORTFOLIOS_MAIN = gql`
  query getPortfolioMain($count: Int!) {
    portfolios(count: $count) {
      portfolio {
        description
        images {
          index {
            blurDataUrl
            picture
          }
        }
        portfolioID
        slug
        title
      }
    }
  }
`;

export const GET_PORTFOLIOS = gql`
  query getPortfolios($count: Int!) {
    portfolios(count: $count) {
      portfolio {
        description
        images {
          detailhero {
            blurDataUrl
            picture
          }
          preview {
            previewTwo {
              blurDataUrl
              picture
            }
            previewOne {
              blurDataUrl
              picture
            }
          }
        }
        portfolioID
        previous
        projBackground
        slug
        sources {
          github
          website
        }
        subGreen
        title
        next
      }
    }
  }
`;
