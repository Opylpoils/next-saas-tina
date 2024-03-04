import * as React from "react";
import { Actions } from "../util/actions";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { PageBlocksPrices, PageBlocksPricesItems } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { TheadlineColorClasses, headlineColorClasses, priceColor } from "../util/color";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

export const Price = ({item,color}:{item:PageBlocksPricesItems, color:string}) => {
  const sectionColorCss =
  color
    ? priceColor.primary[color]
    : priceColor.default;


  return (
      <div className={`flex flex-col items-center px-6 py-8 space-y-8 rounded-2xl shadow even:bg-white ${sectionColorCss}`}>
        <div className="font-semibold text-center">
          <h4 className={`text-2xl font-semibold text-black-300`}>
            {item.title}
          </h4>
          <span className="block pt-4 pb-4 text-5xl font-semibold md:text-6xl opacity-4 even:text-black-400">
            {item.price}
          </span>
          <span className="even:text-[#007BFB] font-normal">
            {item.tagline}
          </span>
        </div>
        <hr className="my-8 w-full h-px bg-gray-200 border-0" />
        <ul className="font-rubik space-y-2 even:text-[#040404] text-base text-center mx-auto">
          {item.list &&
          item.list.map((item,i)=>{
            return (
            <li className="flex items-center space-x-2" key={`item${i}`}>
              <svg
                fill="currentColor"
                height="1em"
                style={{
                  color: '#007BFB'
                }}
                viewBox="0 0 16 16"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
              <span className="font-normal">
                {item}
              </span>
            </li>
            )
          })}
      
        </ul>
        {item.actions && (
          <><Link href={item.actions.link ? item.actions.link : "/"}>
            <button
              data-tina-field={tinaField(item.actions)}
              className={`flex relative z-10 items-center px-7 py-3 text-lg font-semibold whitespace-nowrap rounded-lg ring-offset-2 ring-offset-current transition duration-150 ease-out transform focus:shadow-outline focus:outline-none focus:ring-2`}
            >
              {item.actions.label}
             
                <BiRightArrowAlt
                  className={`-mr-1 ml-1 w-6 h-6 opacity-80`} />

            </button>
          </Link>
        </>
        )} 
      </div>
  )
  
}


export const PriceTable = ({data} : {data: PageBlocksPrices}) => {
  const theme = useTheme();

  return (
    <Section color={data.color}>
      <Container size="large" className="px-4 py-8 mx-auto w-4/5">
        <div className="pt-24 mx-auto mb-12 text-center md:w-3/5">
          <span className="uppercase tracking-[4px] font-medium text-sm md:text-base text-[#007BFB]">
            {data.tagline}
          </span>
          <h1 className={` font-semibold text-4xl lg:text-[44px] pt-5 bg-clip-text ${TheadlineColorClasses[theme.color]} bg-gradient-to-r  ${
                  data.color === "primary"
                    ? `from-white to-gray-100 text-transparent`
                    : headlineColorClasses[theme.color] + TheadlineColorClasses[theme.color]
                }`}>
            {' '}{data.headline}
          </h1>
          <div className="mt-3 font-normal leading-relaxed font-rubik text-base md:text-lg text-[#686868] pt-6 w-4/5  mx-auto ">
          <TinaMarkdown content={data.text} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 pt-3 -mx-4 lg:grid-cols-3 md:grid-cols-2 md:mt-4">
          {data.items &&
          data.items.map((item, i) =>{
            return <Price key={i} item={item} color={theme.color} />
          })}
        </div>
      </Container>
    </Section>
  );
};

const defaultFeature = {
  title: "Here's Another price",
  price: '0',
  tagline: 'par seance',
  
};

export const priceBlockSchema: Template = {
  name: "prices",
  label: "Prix",
  ui: {
    previewSrc: "/blocks/features.png",
    defaultItem: {
      tagline: ' Pricing plan',
      headline: '  Our pricing plans',
      text: 'We have three pricing plans below. You can also get started with a free trial, no credit card needed.',
      items: [defaultFeature ],
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
      type: "object",
      label: "Objet de Prix",
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
       {
          type: "string",
          label: "Titre",
          name: "title",
        },
        {
          type: "string",
          label: "Prix",
          name: "price",
        },
        {
          type: "string",
          label: "Sous Titre",
          name: "tagline",
        },
        {
          type: "string",
          label: "Liste",
          name: "list",
          list: true,
        },
        {
          label: "Actions",
          name: "actions",
          type: "object",
          ui: {
            defaultItem: {
              label: "Action Label",
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
              label: "Link",
              name: "link",
              type: "string",
            },
          ],
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
}