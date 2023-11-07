export interface IPortfolio {
  portfolioID: string;
  title: string;
  slug: string;
  description: string;
  projBackground: string;
  images: PortfolioImages;
  sources: PortfolioSources;
  subGreen: string;
  previous: string;
  next: string;
}

export interface IPortfolioHome {
  portfolioID: string;
  title: string;
  slug: string;
  description: string;
  images: PortfolioIndex;
}

interface PortfolioIndex {
  index: Pictures;
}

interface PortfolioImages {
  detailhero: Pictures;
  preview: ProjectPreview;
}

interface ProjectPreview {
  previewOne: Pictures;
  previewTwo: Pictures;
}

interface Pictures {
  picture: string;
  blurDataUrl: string;
}

interface PortfolioSources {
  github?: string;
  website: string;
}
