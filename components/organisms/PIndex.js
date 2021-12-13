import IndexProp from "../molecules/IndexProp";
import { portfolio_data } from "../../data/portfolio_data";
import ContactButton from "../atoms/ContactButton";

export default function PIndex() {
  return (
    <>
      {portfolio_data.map((data) => (
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
