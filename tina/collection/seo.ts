import { TinaField } from "tinacms";



export const expertSeoPageProps: TinaField = {
    name: "seo",
    label: "SEO",
    type: "object",
    fields: [
      {
        type: "string",
        label: "Title",
        name: "title",
      },
      {
        type: "string",
        label: "Description",
        name: "description",
        ui: {
          component: "textarea",
        },
      },
      {
        type: "object",
        label: "Open Graph",
        name: "openGraph",
        fields: [
          {
            type: "string",
            label: "Type",
            name: "type",
            options: [
              {
                value: "website",
                label: "Site Web"
              }, {
                value: "video",
                label: "Video"
              }, {
                value: "article",
                label: "Article"
              }
            ]
          },
          {
            type: "string",
            label: "Title",
            name: "title",
          },
          {
            type: "string",
            label: "Description",
            name: "description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            label: "Open Graph Images",
            name: "images",
            fields: [
              {
                type: "image",
                label: "Url",
                name: "url",
              },
              {
                type: "number",
                label: "Width",
                name: "width",
              },
              {
                type: "number",
                label: "Height",
                name: "height",
              },
            ],
          },
          {
            type: "string",
            label: "SiteName",
            name: "siteName",
          },
        ],
      },
      {
        type: "string",
        label: "Addtional meta tags",
        name: "addtionalMetaTags",
        list: true,
      },
    ],
  };