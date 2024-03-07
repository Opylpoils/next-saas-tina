import type { Page, PageBlocks } from "../tina/__generated__/types";
import { HeroCenter } from "./blocks/centerHero";
import { Content } from "./blocks/content";
import { FAQ } from "./blocks/faq";
import { Features } from "./blocks/features";
import { Hero } from "./blocks/hero";
import { Masonry } from "./blocks/masonry";
import { PriceTable } from "./blocks/price";
import { Testimonial } from "./blocks/testimonial";
import { tinaField } from "tinacms/dist/react";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Block {...block} />
              </div>
            );
          })
        : null}
    </>
  );
};

const Block = (block: PageBlocks) => {
  switch (block.__typename) {
    case "PageBlocksContent":
      return <Content data={block} />;
    case "PageBlocksHero":
      return <Hero data={block} />;
    case "PageBlocksHerocenter":
      return <HeroCenter data={block} />;
    case "PageBlocksFeatures":
      return <Features data={block} />;
    case "PageBlocksTestimonial":
      return <Testimonial data={block} />;
    case "PageBlocksPrices":
      return <PriceTable data={block} />;
    case "PageBlocksFaq":
      return <FAQ data={block} />;
    case "PageBlocksMasonry":
      return <Masonry data={block}/>;
    default:
      return null;
  }
};
