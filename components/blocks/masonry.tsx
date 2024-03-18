import { Section } from "../util/section";
import * as React from "react";
import { useTheme } from "../layout";
import { Template } from "tinacms";
import { PageBlocksMasonry } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { TheadlineColorClasses, headlineColorClasses } from "../util/color";


export const Masonry = ({ data }: { data: PageBlocksMasonry }) => {
    const theme = useTheme();
  
    return (
    <Section color={data.color} >
        <div className="p-5 sm:p-8">
            <div className="mx-auto max-w-7xl">
                {data.headline && (
                    <h1 className="mx-auto mb-5 text-5xl font-bold text-center"              
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
                    <div className={`mx-auto mb-5 text-base text-center prose  prose-p:text-black${data.color === "primary" ? `text-white`
                    : headlineColorClasses[theme.color] + TheadlineColorClasses[theme.color]}`}               
                        data-tina-field={tinaField(data, "text")}> 
                        <TinaMarkdown content={data.text}/>
                    </div>
                )}
            </div>
            <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
                {data.images && data.images.map((item,i)=>{
                    return (
                        <img src={item.src} alt={item.label} />
                    )
                })}
            </div>
        </div>


    </Section>
  );
};

export const masonryBlockSchema: Template = {
    name: "masonry",
    label: "Gallery Mason",
    ui: {
      previewSrc: "/blocks/mason.png",
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
        label: "Images",
        name: "images",
        type: "object",
        list: true,
        ui: {
          itemProps: (item) => ({ label: item.label }),
        },
        fields: [
            {
                name: "src",
                label: "Image Source",
                type: "image",
            },
            {
                name: "label",
                label: "Image Titre",
                type: "string",
            },
        ]
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
  