import React from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import { Theme } from "./theme";
import layoutData from "../../content/global/index.json";
import { Global, PageSeo } from "../../tina/__generated__/types";

export const Layout = ({
  data = layoutData ,
  SEO,
  children,
}: {
  data?: Omit<Global, "id" | "_sys" | "_values">;
  SEO?: PageSeo;
  children: React.ReactNode;
}) => {
  const metaurl = "/tina.svg";
  const metadescription = "Vous désirez comprendre les réactions de votre animal, ses besoins. Vous voulez l’éduquer. Coach comportementaliste animalier";
  return (
    <>
      <Head>
        <title>{SEO?.title ? SEO?.title : data.title}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content={SEO?.description ? SEO?.description : metadescription}/>
        <meta name="robot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* Meta Key Word */}
        <meta name="Keyword" content={SEO?.addtionalMetaTags?.toString()}/>
        {/* OPEN GRAPH META */}
        { SEO?.openGraph && (
          <>
          <meta property="og:locale" content="fr-FR"/>
          <meta property="og:type" content={SEO?.openGraph.type ? SEO?.openGraph.type : 'siteweb'}/>
          <meta property="og:site_name" content={SEO?.openGraph.siteName ? SEO?.openGraph.siteName : "La Crouzié"} />
          <meta property="og:title" content={SEO?.openGraph.title ? (SEO?.title && SEO?.title) : data.title} />
          <meta property="og:description" content={SEO?.openGraph.description ? (SEO?.description && SEO?.description) : metadescription} />
          <meta property="og:image" content={SEO?.openGraph.images?.url ? SEO?.openGraph.images?.url : metaurl} />
          <meta property="og:image:width" content={SEO?.openGraph.images?.width ? SEO?.openGraph.images?.width?.toString() : '500'} />
          <meta property="og:image:height" content={SEO?.openGraph.images?.height ? SEO?.openGraph.images?.height?.toString() : '500'}/>
          </>
        )}
        {data.theme.font === "nunito" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap"
              rel="stylesheet"
            />
          </>
        )}
        {data.theme.font === "lato" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap"
              rel="stylesheet"
            />
          </>
        )}
      </Head>
      <Theme data={data?.theme}>
        <div
          className={`min-h-screen flex flex-col ${
            data.theme.font === "nunito" && "font-nunito"
          } ${data.theme.font === "lato" && "font-lato"} ${
            data.theme.font === "sans" && "font-sans"
          }`}
        >
          <Header data={data?.header} />
          <div className="flex-1 text-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-1000 flex flex-col">
            {children}
          </div>
          <Footer
            data={data?.footer}
            icon={data?.header.icon}
          />
        </div>
      </Theme>
    </>
  );
};
