import styled from "styled-components";
import Image from "next/image";
import IndexProp from "../molecules/IndexProp";
import portfolio_data from "../../data/data";

export default function PIndex() {
  return (
    <>
      {portfolio_data.map((data) => (
        <IndexProp
          key={data.id}
          id={data.id}
          name={data.name}
          image={data.images.index.mobile}
          description={data.description}
        />
      ))}
    </>
  );
}
