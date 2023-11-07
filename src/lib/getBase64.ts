import { getPlaiceholder } from "plaiceholder";
import { IPortfolio, IPortfolioHome } from "../interfaces/Portfolio";

export const getBase64 = async (imageUrl: string) => {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
};

export const getAllBase64Urls = async (imagePaths: string[]) => {
  const base64Promises = imagePaths.map((path) =>
    getBase64(process.env.NEXT_PUBLIC_CLOUDFRONT_ENDPOINT + path)
  );

  const base64Results = await Promise.all(base64Promises);

  return base64Results;
};

export const addPortfolioIndexBlurDataUrls = async (
  projects: IPortfolioHome[]
) => {
  const base64Promises = projects.map((project) =>
    getBase64(
      process.env.NEXT_PUBLIC_CLOUDFRONT_ENDPOINT + project.images.index.picture
    )
  );

  const base64Results = await Promise.all(base64Promises);

  const updatedPortfolioIndexItems = projects.map((project, index) => ({
    ...project,
    images: {
      ...project.images,
      index: {
        ...project.images.index,
        blurDataUrl: base64Results[index],
      },
    },
  }));

  return updatedPortfolioIndexItems;
};

export const addPortfolioBlurDataUrls = async (project: IPortfolio) => {
  const detailHeroBlurDataUrl = await getBase64(
    process.env.NEXT_PUBLIC_CLOUDFRONT_ENDPOINT +
      project.images.detailhero.picture
  );

  const previewOneBlurDataUrl = await getBase64(
    process.env.NEXT_PUBLIC_CLOUDFRONT_ENDPOINT +
      project.images.preview.previewOne.picture
  );

  const previewTwoBlurDataUrl = await getBase64(
    process.env.NEXT_PUBLIC_CLOUDFRONT_ENDPOINT +
      project.images.preview.previewTwo.picture
  );

  const updatedDetailHero = {
    ...project.images.detailhero,
    blurDataUrl: detailHeroBlurDataUrl,
  };

  const updatedPreviewOne = {
    ...project.images.preview.previewOne,
    blurDataUrl: previewOneBlurDataUrl,
  };

  const updatedPreviewTwo = {
    ...project.images.preview.previewTwo,
    blurDataUrl: previewTwoBlurDataUrl,
  };

  return {
    ...project,
    images: {
      ...project.images,
      detailhero: updatedDetailHero,
      preview: {
        previewOne: updatedPreviewOne,
        previewTwo: updatedPreviewTwo,
      },
    },
  };
};
