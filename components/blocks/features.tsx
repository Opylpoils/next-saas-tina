import { Section } from "../util/section";
import { Container } from "../util/container";
import { Icon } from "../util/icon";
import { iconSchema } from "../util/icon";
import {
  PageBlocksFeatures,
  PageBlocksFeaturesItems,
} from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const Feature = ({
  featuresColor,
  data,
}: {
  featuresColor: string;
  data: PageBlocksFeaturesItems;
}) => {
  return (
    <div
      data-tina-field={tinaField(data)}
      className="flex flex-col flex-1 gap-6 items-center mx-auto max-w-xl text-center"
      style={{ flexBasis: "16rem" }}
    >
      {data.icon && (
        <Icon
          tinaField={tinaField(data, "icon")}
          parentColor={featuresColor}
          data={{ size: "large", ...data.icon }}
        />
      )}
      {data.title && (
        <h3
          data-tina-field={tinaField(data, "title")}
          className="text-2xl font-semibold title-font"
        >
          {data.title}
        </h3>
      )}
      {data.text && (
        <p
          data-tina-field={tinaField(data, "text")}
          className="text-base leading-relaxed opacity-80"
        >
          {data.text}
        </p>
      )}
    </div>
  );
};

export const Features = ({ data }: { data: PageBlocksFeatures }) => {
  return (
    <Section color={data.color}>
      <Container
        className={`flex flex-wrap gap-y-8 gap-x-10 text-left`}
        size="large"
      >
        {data.items &&
          data.items.map(function (block, i) {
            return <Feature featuresColor={data.color} key={i} data={block} />;
          })}
      </Container>
    </Section>
  );
};

const defaultFeature = {
  title: "Here's Another Feature",
  text: "This is where you might talk about the feature, if this wasn't just filler text.",
  icon: {
    color: "",
    style: "float",
    name: "",
  },
};

export const featureBlockSchema = {
  name: "features",
  label: "Features",
  ui: {
    previewSrc: "/blocks/features.png",
    defaultItem: {
      items: [defaultFeature, defaultFeature, defaultFeature],
    },
  },
  fields: [
    {
      type: "object",
      label: "Feature Items",
      name: "items",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.title,
          };
        },
        defaultItem: {
          ...defaultFeature,
        },
      },
      fields: [
        iconSchema,
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Text",
          name: "text",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};
