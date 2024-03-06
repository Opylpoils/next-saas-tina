import * as React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import { TheadlineColorClasses, headlineColorClasses } from "../util/color";
import { PageBlocksFaq } from "../../tina/__generated__/types";

export const FAQ = ({data}:{data:PageBlocksFaq})=>{
    const theme = useTheme();

    return (
        <Section color={data.color}>
            <Container size="large" className="mt-12 md:mt-24 md:pt-12 mx-auto w-4/5 h-fit">
                <div className="">
                    <div className="flex flex-row">
                        <div className="text-center m-auto">
                            <h1 data-tina-field={tinaField(data, "title")}
                            className={`text-4xl leading-tight tracking-tight mt-2 font-semibold ${
                                data.color === "primary"
                                  ? `from-white to-gray-100 text-white`
                                  : headlineColorClasses[theme.color] + TheadlineColorClasses[theme.color]
                              }`} >
                                {data.title}
                            </h1>
                        </div>
                    </div>
                </div>
                <hr className="h-px my-5  bg-gray-200 border-0" />
                <section className="mx-auto">
                    <div className=" ">
                        <div className=" rounded-3xl h-5/6 pt-8 mt-4">
                            <div className="pb-12 ">
                                {data.details &&
                                data.details.map((item,i)=>{
                                    return (
                                        <details key={i}
                                        data-tina-field={tinaField(item)}
                                        className="
                                                shadow rounded-lg mb-6"
                                        >
                                            <summary
                                            className={`font-semibold  rounded-lg py-6 px-6 text-xl
                                                    cursor-pointer ${
                                                        data.color === "primary"
                                                          ? `from-white to-gray-100 text-white`
                                                          : headlineColorClasses[theme.color] + TheadlineColorClasses[theme.color]
                                                      }`}
                                            >
                                                {item.title}
                                            </summary>
                                            <div className={` prose prose-lg max-w-none opacity-80 px-6 pb-6 text-lg
                                            ${
                                                data.color === "primary"
                                                  ? `from-white to-gray-100 text-white`
                                                  : headlineColorClasses[theme.color] + TheadlineColorClasses[theme.color]
                                              }`}>
                                                <TinaMarkdown content={item.desc} />

                                            </div>
                                        </details>
                                    )
                                })}
                               
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </Section>
    )
}

const defaultFaq = {
    title: 'How do I get started?',
    desc: 'Simply check out our getting started guide for more info.',
};

export const faqBlockSchema: Template = {
    name: "faq",
    label: "FAQ",
    ui: {
        previewSrc: "/blocks/faq.png",
        defaultItem: {
            title: 'Questions fréquemment posées',
            details: [defaultFaq ],
        },
    },
    fields: [
        {
        type: "string",
        label: "Titre",
        name: "title",
        },

        {
        type: "object",
        label: "Questions",
        name: "details",
        list: true,
        ui: {
            itemProps: (item) => {
            return {
                label: item?.title,
            };
            },
            defaultItem: {
            ...defaultFaq,
            },
        },
        fields: [
        {
            type: "string",
            label: "Question",
            name: "title",
            },
            {
                label: "Réponse",
                name: "desc",
                type: "rich-text",
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
