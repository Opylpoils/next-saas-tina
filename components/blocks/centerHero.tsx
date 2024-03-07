import * as React from "react";
import { Actions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import {PageBlocksHerocenter } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { TheadlineColorClasses, headlineColorClasses } from "../util/color";

export const HeroCenter = ({ data }: { data: PageBlocksHerocenter }) => {
  const theme = useTheme();

  return (
    <Section color={data.color} >
        <div className="min-h-screen hero" style={{backgroundImage: `url("${data.src}")`}}>
            <div className="bg-opacity-60 hero-overlay"></div>
            <div className="text-center hero-content text-neutral-content">
                <div className="max-w-md">
                    {data.headline && (
                        <h1 className="mb-5 text-5xl font-bold"              
                            data-tina-field={tinaField(data, "headline")}>
                             <span
                                className={`bg-clip-text bg-gradient-to-r  ${
                                data.color === "primary"
                                    ? `from-white to-gray-100 text-transparent`
                                    : headlineColorClasses[theme.color] + TheadlineColorClasses[theme.color]
                                }`}
                            >
                                {data.headline}
                            </span>
                        </h1>
                    )}{data.text && (
                        <div className="mb-5 text-base text-white prose"               
                            data-tina-field={tinaField(data, "text")}> 
                            <TinaMarkdown content={data.text}/>
                        </div>
                    )}
                    {data.actions && (
                        <Actions
                            className={`justify-center py-2`}
                            parentColor={data.color}
                            actions={data.actions as any}
                        />
                    )}
                </div>
            </div>
        </div>
    </Section>
  );
};

export const heroCenterBlockSchema: Template = {
  name: "herocenter",
  label: "Hero Centrer",
  ui: {
    previewSrc: "/blocks/HeroCenter.png",
    defaultItem: {
      headline: "This Big Text is Totally Awesome",
      text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
    },
  },
  fields: [
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
        name: "src",
        label: "Image Source",
        type: "image",
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
