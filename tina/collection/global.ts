import type { Collection } from "tinacms";
import { iconSchema } from "../../components/util/icon";
import { ColorPickerInput } from "../fields/color";

const Global: Collection = {
  label: "Global",
  name: "global",
  path: "content/global",
  format: "json",
  ui: {
    global: true,
  },
  fields: [
    {
      type: "string",
      label: "Titre",
      name: "title",
    },
    {
      type: "object",
      label: "Header (Tout en haut)",
      name: "header",
      fields: [
        iconSchema as any,
        {
          type: "string",
          label: "Nom",
          name: "name",
        },
        {
          type: "string",
          label: "Couleur",
          name: "color",
          options: [
            { label: "Default", value: "default" },
            { label: "Primary", value: "primary" },
          ],
        },
        {
          type: "object",
          label: "Boutton de Navigation",
          name: "nav",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.label };
            },
            defaultItem: {
              href: "home",
              label: "Home",
            },
          },
          fields: [
            {
              type: "string",
              label: "Link",
              name: "href",
            },
            {
              type: "string",
              label: "Label",
              name: "label",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      label: "Footer (Tout en bas)",
      name: "footer",
      fields: [
        {
          type: "string",
          label: "Couleur",
          name: "color",
          options: [
            { label: "Default", value: "default" },
            { label: "Primary", value: "primary" },
          ],
        },
        {
          type: "object",
          label: "Navigation de Footer",
          name: "nav",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.name };
            },
          },
          fields: [
            {
              type: "string",
              label: "Lien de Page",
              name: "link",
            },
            {
              type: "string",
              label: "Nom",
              name: "name",
            },
          ],
        },
        {
          type: "object",
          label: "Information de Contact",
          name: "contact",
          fields: [
            {
              type: "string",
              label: "Email",
              name: "mail",
            },
            {
              type: "string",
              label: "Telephone",
              name: "phone",
            },
            {
              type: "string",
              label: "Adresse",
              name: "local",
            },
          ],
        },
        {
          type: "object",
          label: "Partenaire",
          name: "image",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.name };
            },
          },
          fields: [
            {
              type: "image",
              label: "Image",
              name: "image",
            },
            {
              type: "string",
              label: "Titre",
              name: "name",
            },
          ],
        },
        {
          type: "object",
          label: "Reseaux Sociaux",
          name: "social",
          fields: [
            {
              type: "string",
              label: "Facebook",
              name: "facebook",
            },
            {
              type: "string",
              label: "Twitter",
              name: "twitter",
            },
            {
              type: "string",
              label: "Instagram",
              name: "instagram",
            },
            {
              type: "string",
              label: "Github",
              name: "github",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      label: "Theme",
      name: "theme",
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      fields: [
        {
          type: "string",
          label: "Couleur Primaire",
          name: "color",
          ui: {
            component: ColorPickerInput,
          },
        },
        {
          type: "string",
          name: "font",
          label: "Font Family",
          options: [
            {
              label: "System Sans",
              value: "sans",
            },
            {
              label: "Nunito",
              value: "nunito",
            },
            {
              label: "Lato",
              value: "lato",
            },
          ],
        },
        {
          type: "string",
          name: "darkMode",
          label: "Dark Mode",
          options: [
            {
              label: "System",
              value: "system",
            },
            {
              label: "Light",
              value: "light",
            },
            {
              label: "Dark",
              value: "dark",
            },
          ],
        },
      ],
    },
  ],
};

export default Global;
