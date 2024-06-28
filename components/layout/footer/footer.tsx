import React from "react";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Container } from "../../util/container";
import { useTheme } from "..";
import { Icon } from "../../util/icon";
import { GlobalFooter, GlobalHeaderIcon } from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";


export const Footer = ({ data, icon }: {data: GlobalFooter, icon: GlobalHeaderIcon}) => {
  const theme = useTheme();
  const socialIconClasses = "h-7 w-auto";
  const socialIconColorClasses = {
    blue: "text-blue-500 dark:text-blue-400 hover:text-blue-300",
    teal: "text-teal-500 dark:text-teal-400 hover:text-teal-300",
    green: "text-green-500 dark:text-green-400 hover:text-green-300",
    red: "text-red-500 dark:text-red-400 hover:text-red-300",
    pink: "text-pink-500 dark:text-pink-400 hover:text-pink-300",
    purple: "text-purple-500 dark:text-purple-400 hover:text-purple-300",
    orange: "text-orange-500 dark:text-orange-400 hover:text-orange-300",
    yellow: "text-yellow-500 dark:text-yellow-400 hover:text-yellow-300",
    black: "text-black dark:text-white hover:text-gray-900",
    primary: "text-white opacity-80 hover:opacity-100",
  };

  const footerColor = {
    default:
      "text-gray-800 from-white to-gray-50 dark:from-gray-900 dark:to-gray-1000",
    primary: {
      blue: "text-white from-blue-500 to-blue-700",
      teal: "text-white from-teal-500 to-teal-600",
      green: "text-white from-green-500 to-green-600",
      red: "text-white from-red-500 to-red-600",
      pink: "text-white from-pink-500 to-pink-600",
      purple: "text-white from-purple-500 to-purple-600",
      orange: "text-white from-orange-500 to-orange-600",
      yellow: "text-white from-yellow-500 to-yellow-600",
      black: "text-white from-gray-800 ",
    },
  };

  const footerColorCss =
    data.color === "primary"
      ? footerColor.primary[theme.color]
      : footerColor.default;

  return (
    <div>
    <footer className={`p-10 bg-gradient-to-br footer ${footerColorCss}`}>
      <nav className="justify-self-center"
            data-tina-field={tinaField(data, 'nav')} >   
        <h4 className="text-lg footer-title">Pages</h4> 
        {data.nav && data.nav.map((item,i)=>{
        return (
          <a className="text-base link link-hover" key={i} href={item.link}>{item.name}</a>
        )})}
        
      </nav> 
      <nav className="justify-self-center"
            data-tina-field={tinaField(data, 'image')} >
        <h4 className="mx-auto text-lg footer-title">Partenaires</h4> 
        <div className='flex flex-row flex-wrap gap-2'>
          {data.image && data.image.map((item,i)=>{
            
            return (
              item.link? (
                  <Link href={item.link} passHref>
                    <img key={"image"+i} src={item.image} alt={item.name} className="max-h-24" />
                  </Link>
                ):(
                  <img key={"image"+i} src={item.image} alt={item.name} className="max-h-24" />
                )
              
            )
          })}
        </div>
        <a className="link link-hover"></a>

      </nav>
      <nav className="justify-self-center" 
      data-tina-field={tinaField(data, 'contact')} >
        <h4 className="text-lg footer-title">Contact</h4> 
        {data.contact.mail && <a className="text-base link link-hover" href={`mailto:${data.contact.mail}`}>{data.contact.mail}</a>}
        {data.contact.phone && <a className="text-base link link-hover" href={`tel:${data.contact.phone}`}>{data.contact.phone}</a>}
        {data.contact.local && <a className="text-base link link-hover" >{data.contact.local}</a>}
      </nav> 
    </footer> 
    <footer className={`px-12 py-4 bg-gradient-to-br md:px-36 footer ${footerColorCss}`}>
      <aside className="grid-flow-col items-center">
        <Link
          href="/"
          className="flex items-center mx-2 font-bold tracking-tight text-gray-400 whitespace-nowrap opacity-50 transition duration-150 ease-out group dark:text-gray-300 hover:opacity-100"
        >
          <Icon
            parentColor={data.color}
            data={{
              name: icon.name,
              color: data.color === "primary" ? "primary" : icon.color,
              style: icon.style,
            }}
            className="inline-block w-auto h-10 group-hover:text-orange-500"
          />
        </Link>
        <p className={`${footerColorCss}`}>Copyright © 2024 - All right reserved by Opy'l Poils</p>
      </aside> 
      <nav className="md:place-self-center md:justify-self-end">
        <div className="grid grid-flow-col gap-4">
          {data.social && data.social.facebook && (
            <a
              className="inline-block opacity-80 transition duration-150 ease-out hover:opacity-100"
              href={data.social.facebook}
              target="_blank"
            >
              <FaFacebookF
                className={`${socialIconClasses} ${
                  socialIconColorClasses[
                    data.color === "primary" ? "primary" : theme.color
                  ]
                }`}
              />
            </a>
          )}
          {data.social && data.social.twitter && (
            <a
              className="inline-block opacity-80 transition duration-150 ease-out hover:opacity-100"
              href={data.social.twitter}
              target="_blank"
            >
              <FaTwitter
                className={`${socialIconClasses} ${
                  socialIconColorClasses[
                    data.color === "primary" ? "primary" : theme.color
                  ]
                }`}
              />
            </a>
          )}
          {data.social && data.social.instagram && (
            <a
              className="inline-block opacity-80 transition duration-150 ease-out hover:opacity-100"
              href={data.social.instagram}
              target="_blank"
            >
              <AiFillInstagram
                className={`${socialIconClasses} ${
                  socialIconColorClasses[
                    data.color === "primary" ? "primary" : theme.color
                  ]
                }`}
              />
            </a>
          )}
          {data.social && data.social.github && (
            <a
              className="inline-block opacity-80 transition duration-150 ease-out hover:opacity-100"
              href={data.social.github}
              target="_blank"
            >
              <FaGithub
                className={`${socialIconClasses} ${
                  socialIconColorClasses[
                    data.color === "primary" ? "primary" : theme.color
                  ]
                }`}
              />
            </a>
          )}
        </div>
      </nav>
    </footer>
    </div>
  );
};
