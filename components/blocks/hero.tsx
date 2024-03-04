import * as React from "react";
import { Actions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { PageBlocksHero } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const Hero = ({ data }: { data: PageBlocksHero }) => {
  const theme = useTheme();
  const headlineColorClasses = {
    blue: "from-blue-400 to-blue-600",
    teal: "from-teal-400 to-teal-600",
    green: "from-green-400 to-green-600",
    red: "from-red-400 to-red-600",
    pink: "from-pink-400 to-pink-600",
    purple: "from-purple-400 to-purple-600",
    orange: "from-orange-300 to-orange-600",
    yellow: "from-yellow-400 to-yellow-600",
    black: "from-gray-900 to-black"
  };
  const TheadlineColorClasses = {
    blue: "text-blue-transparent",
    teal: "text-transparent",
    green: "text-transparent",
    red: "text-transparent",
    pink: "text-transparent",
    purple: "text-transparent",
    orange: "text-orange-transparent",
    yellow: "text-transparent",
    black: "text-black-transparent"
  };


  const imageClasses = {
    top: "row-start-2 text-center",
    bottom: "row-start-1 text-center",
    left: "md:col-span-3 md:col-start-3 md:text-left md:row-start-1 row-start-2",
    right: " md:col-span-3 md:col-start-1 md:text-left md:row-start-1 row-start-2",
  }
  const imageClassesPos = {
    top: "gap-y-14 grid-cols-1 ",
    bottom: "gap-y-14 grid-cols-1 ",
    left: "gap-y-14 grid-cols-1 md:grid-cols-5 md:gap-x-14",
    right: " gap-y-14 grid-cols-1 md:grid-cols-5 md:gap-x-14",
  }
  return (
    <Section color={data.color}>
      <Container
        size="large"
        className={`grid  gap-14 justify-center items-center ${data.imagePos ? imageClassesPos[data.imagePos] : 'grid-cols-1 md:grid-cols-5 '} `}
      >
        <div className={` text-center   ${data.imagePos ? imageClasses[data.imagePos] : 'md:col-span-3 md:text-left md:row-start-1 row-start-2'}`}>
          {data.tagline && (
            <h2
              data-tina-field={tinaField(data, "tagline")}
              className="inline-block relative z-20 px-3 py-1 mb-8 font-bold tracking-wide text-md title-font"
            >
              {data.tagline}
              <span className="absolute top-0 left-0 w-full h-full bg-current rounded-full -z-1 opacity-7"></span>
            </h2>
          )}
          {data.headline && (
            <h3
              data-tina-field={tinaField(data, "headline")}
              className={`relative mb-10 w-full text-5xl font-extrabold tracking-normal leading-tight title-font`}
            >
              <span
                className={`bg-clip-text ${TheadlineColorClasses[theme.color]} bg-gradient-to-r  ${
                  data.color === "primary"
                    ? `from-white to-gray-100`
                    : headlineColorClasses[theme.color]
                }`}
              >
                {data.headline}
              </span>
            </h3>
          )}
          {data.text && (
            <div
              data-tina-field={tinaField(data, "text")}
              className={` prose prose-lg mx-auto md:mx-0 mb-10 ${
                data.color === "primary" ? `prose-primary` : `dark:prose-dark`
              }`}
            >
              <TinaMarkdown content={data.text} />
            </div>
          )}
          {data.actions && (
            <Actions
              className={`justify-center py-2 ${(data.imagePos === 'right' || data.imagePos === 'left' || !data.imagePos ) && ' md:justify-start'}`}
              parentColor={data.color}
              actions={data.actions}
            />
          )}
        </div>
        {data.image && (
          <div
            data-tina-field={tinaField(data.image, "src")}
            className={`flex relative justify-center md:col-span-2 ${(data.imagePos === 'right' || data.imagePos === 'left') && 'row-start-1'}`}
          >
            <img
              className="absolute w-full rounded-lg max-w-xs md:max-w-none h-auto blur-2xl brightness-150 contrast-[0.9] dark:brightness-150 saturate-200 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light"
              src={data.image.src}
              aria-hidden="true"
            />
            <img
              className="relative z-10 w-full max-w-xs h-auto rounded-lg md:max-w-none"
              alt={data.image.alt}
              src={data.image.src}
            />
          </div>
        )}
      </Container>
    </Section>
  );
};

export const heroBlockSchema: Template = {
  name: "hero",
  label: "Hero",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: "This Big Text is Totally Awesome",
      text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
    },
  },
  fields: [
    {
      type: "string",
      label: "Tagline",
      name: "tagline",
    },
    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      label: "Text",
      name: "text",
      type: "rich-text",
    },
    {
      label: "Actions",
      name: "actions",
      type: "object",
      list: true,
      ui: {
        defaultItem: {
          label: "Action Label",
          type: "button",
          icon: true,
          link: "/",
        },
        itemProps: (item) => ({ label: item.label }),
      },
      fields: [
        {
          label: "Label",
          name: "label",
          type: "string",
        },
        {
          label: "Type",
          name: "type",
          type: "string",
          options: [
            { label: "Button", value: "button" },
            { label: "Link", value: "link" },
          ],
        },
        {
          label: "Icon",
          name: "icon",
          type: "boolean",
        },
        {
          label: "Link",
          name: "link",
          type: "string",
        },
      ],
    },
    {
      type: 'string',
      name: 'imagePos',
      label: 'Position de l\'image',
      options: [
        {
          value: "top",
          label: "Haut"
        }, {
          value: "bottom",
          label: "Bas"
        }, {
          value: "left",
          label: "Gauche"
        }, {
          value: "right",
          label: "Droite"
        }
      ]
    },
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
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
