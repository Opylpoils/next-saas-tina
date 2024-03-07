import type { Collection } from "tinacms";
import { heroBlockSchema } from "../../components/blocks/hero";
import { contentBlockSchema } from "../../components/blocks/content";
import { testimonialBlockSchema } from "../../components/blocks/testimonial";
import { featureBlockSchema } from "../../components/blocks/features";
import { priceBlockSchema } from "../../components/blocks/price";
import { faqBlockSchema } from "../../components/blocks/faq";
import { expertSeoPageProps } from "./seo";
import { heroCenterBlockSchema } from "../../components/blocks/centerHero";
import { masonryBlockSchema } from "../../components/blocks/masonry";

const Page: Collection = {
  label: "Pages",
  name: "page",
  path: "content/pages",
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      if (document._sys.filename === "about") {
        return `/about`;
      }
      if (document._sys.filename ) {
        return `/${document._sys.filename}`;
      }
      return undefined;
    },
  },
  fields: [
    expertSeoPageProps,
    {
      type: "string",
      label: "Title",
      name: "title",
      description:
        "The title of the page. This is used to display the title in the CMS",
      isTitle: true,
      required: true,
    },
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Sections",
      ui: {
        visualSelector: true,
      },
      templates: [
        heroBlockSchema,
        heroCenterBlockSchema,
        priceBlockSchema,
        faqBlockSchema,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        featureBlockSchema,
        contentBlockSchema,
        testimonialBlockSchema,
        masonryBlockSchema,
      ],
    },
  ],
};

export default Page;
