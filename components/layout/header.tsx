import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "../util/container";
import { useTheme } from ".";
import { Icon } from "../util/icon";
import { tinaField } from "tinacms/dist/react";
import { GlobalHeader } from "../../tina/__generated__/types";
import { Navbar } from "flowbite-react";

export const Header = ({ data }: { data: GlobalHeader }) => {
  const router = useRouter();
  const theme = useTheme();

  const headerColor = {
    default:
      "text-black dark:text-white from-gray-50 to-white dark:from-gray-800 dark:to-gray-900",
    primary: {
      blue: "text-white from-blue-300 to-blue-500",
      teal: "text-white from-teal-400 to-teal-500",
      green: "text-white from-green-400 to-green-500",
      red: "text-white from-red-400 to-red-500",
      pink: "text-white from-pink-400 to-pink-500",
      purple: "text-white from-purple-400 to-purple-500",
      orange: "text-white from-orange-400 to-orange-500",
      yellow: "text-white from-yellow-400 to-yellow-500",
      black: " text-black from-gray-900 to-black"
    },
  };

  const headerColorCss =
    data.color === "primary"
      ? headerColor.primary[theme.color]
      : headerColor.default;

  const activeItemClasses = {
    blue: "border-b-3 border-blue-200 text-blue-700 dark:text-blue-300 font-medium dark:border-blue-700",
    teal: "border-b-3 border-teal-200 text-teal-700 dark:text-teal-300 font-medium dark:border-teal-700",
    green:
      "border-b-3 border-green-200 text-green-700 dark:text-green-300 font-medium dark:border-green-700",
    red: "border-b-3 border-red-300 text-red-700 dark:text-green-300 font-medium dark:border-red-700",
    pink: "border-b-3 border-pink-200 text-pink-700 dark:text-pink-300 font-medium dark:border-pink-700",
    purple:
      "border-b-3 border-purple-200 text-purple-700 dark:text-purple-300 font-medium dark:border-purple-700",
    orange:
      "border-b-3 border-orange-200 text-orange-700 dark:text-orange-300 font-medium dark:border-orange-700",
    yellow:
      "border-b-3 border-yellow-300 text-yellow-700 dark:text-yellow-300 font-medium dark:border-yellow-600",
      black: 
      "border-b-3 border-gray-950 text-black dark:text-white font-medium dark:border-gray-500",
  };

  const activeBackgroundClasses = {
    blue: "text-blue-500",
    teal: "text-teal-500",
    green: "text-green-500",
    red: "text-red-500",
    pink: "text-pink-500",
    purple: "text-purple-500",
    orange: "text-orange-500",
    yellow: "text-yellow-500",
    black: "text-black"
  };
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Navbar fluid rounded className={`relative overflow-hidden bg-gradient-to-b ${headerColorCss}`}>
      <Navbar.Brand as={Link} href="/">
      <Icon
          tinaField={tinaField(data, "icon")}
          parentColor={data.color}
          data={{
            size:'xxl',
            name: data.icon.name,
            color: data.icon.color,
            style: data.icon.style,
          }}
        />
        <span data-tina-field={tinaField(data, "name")}>{data.name}</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {data.nav &&
        data.nav.map((item, i) => {
          const activeItem =
            (item.href === ""
              ? router.asPath === "/"
              : router.asPath.includes(item.href)) && isClient;
            return (
              <Navbar.Link href={item.href} key={i} className={` hover:opacity-100 ${
                activeItem ?  activeItemClasses[theme.color] : `opacity-70`
              }`} data-tina-field={tinaField(item, "label")}
              >{item.label}</Navbar.Link>
            )
        
        })}
      </Navbar.Collapse>
    </Navbar>

   
  );
};
