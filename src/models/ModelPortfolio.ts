export interface IPortfolio {
  id: number;
  name: string;
  slug: string;
  description: string;
  projBackground: string;
  images: IImages;
  sources: ISources;
  subGreen: string;
  previous: string;
  next: string;
}

interface IIndexProp {
  id: number;
  name: string;
  slug: string;
  description: string;
  images: IImages;
}

export interface IImages {
  index: IIndex;
  detailhero: IDetailHero;
  preview: IPreview;
}

export interface IPreview {
  desktopOne: string;
  desktopTwo: string;
}

export interface IDetailHero {
  desktop: string;
}

export interface IIndex {
  desktop: string;
}

export interface ISources {
  github: string;
  website: string;
}
