import "../styles/global.scss";

import altlangs from "./data/altlang.json";
import App from "next/app";
import DDO from "./data/DDO.json";
import { DotcomShell } from "@carbon/ibmdotcom-react";
import Head from "next/head";
import packageJson from "../package.json";
import React from "react";

/**
 * Sets the root path of the alternative urls
 * Learn more about configuring alternative languages at:
 * https://github.com/carbon-design-system/carbon-for-ibm-dotcom/blob/master/docs/building-for-ibm-dotcom.md
 *
 * @type {string|string}
 * @private
 */
const _rootPath = process.env.ALTLANG_ROOT_PATH || "/";

/**
 * Class CarbonForIBMDotcom
 */
export default class CarbonForIBMDotcom extends App {
  /**
   * Renders the DotcomShell
   *
   * @returns {*} Page wrapper JSX
   */
  render() {
    const { Component, pageProps } = this.props;
    const reactVersion = packageJson.dependencies["@carbon/ibmdotcom-react"];
    const stylesVersion = packageJson.dependencies["@carbon/ibmdotcom-styles"];
    const digitalData = `digitalData=${JSON.stringify(DDO)};`;

    /*const items = altlangs.map((alt, i) => (
      <link
        key={i}
        rel="alternate"
        hrefLang={`${alt.lc}-${alt.cc}`}
        href={`${_rootPath}?cc=${alt.cc}&lc=${alt.lc}`}
      />
    ));*/

    return (
      <>
        <Head>
          <link rel="icon" href="//www.ibm.com/favicon.ico" />

          <meta name="ibmdotcom.version.react" content={reactVersion} />
          <meta name="ibmdotcom.version.styles" content={stylesVersion} />
          <meta
            name="ibmdotcom.build.time"
            content={new Date().toISOString()}
          />
          <meta name="dcterms.date" content="2015-10-01" />
          <meta name="dcterms.rights" content="© Copyright IBM Corp. 2020" />
          <meta name="description" content="Une société de services du groupe IBM France spécialisée dans l'installation de systèmes d'alarmes chez les particuliers et dans la maintenance informatique pour agences bancaires et commerçants." />
          <meta name="keywords" content="ois, offres innovantes de services, maintenance informatique, alarmes, offres d’emploi, technicien itinérant, ibm, job, recrutement, technicien maintenance, déplacements, autonomie, avantages" />
          <meta name="abstract" content="Une société de services du groupe IBM France spécialisée dans l'installation de systèmes d'alarmes chez les particuliers et dans la maintenance informatique pour agences bancaires et commerçants." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="geo.country" content="FR" />
          <meta name="robots" content="index,follow" />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              document.getElementsByTagName("html")[0].setAttribute("lang", 'fr-FR');
           `,
            }}
          />


          {process.env.ENABLE_RTL === "true" && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
            document.documentElement.dir = 'rtl';
            document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
            `,
              }}
            />
          )}

          <script src="//1.www.s81c.com/common/stats/ibm-common.js" defer />
        </Head>
        <DotcomShell
          footerProps={{
            disableLocaleButton: true,
          }}
          mastheadProps={{
            navigation: "default",
          }}
        >
       <Component {...pageProps} />
        </DotcomShell>
      </>
    );
  }
}
