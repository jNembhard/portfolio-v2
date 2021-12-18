import IndexProp from "../molecules/IndexProp";
import { portfoliodata } from "../../data/portfoliodata";
import ContactButton from "../atoms/ContactButton";

export default function PIndex() {
  return (
    <>
      {portfoliodata.map((data) => (
        <IndexProp
          key={data.id}
          id={data.id}
          name={data.name}
          slug={data.slug}
          image={data.images.index.mobile}
          description={data.description}
        />
      ))}
      <ContactButton />
    </>
  );
}
