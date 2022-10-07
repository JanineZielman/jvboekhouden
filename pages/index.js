import Head from "next/head";
import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio";
import { components } from "../slices/";
import { Layout } from "../components/Layout";

const Index = ({ page, navigation, settings }) => {
  return (
    <Layout navigation={navigation} settings={settings}>
      <Head>
        <title>{settings.data.titel} | {page.data.titel}</title>
        <meta name="description" content={settings.data.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${page.data.titel} | ${settings.data.titel}`} />
        <meta property="og:description" content={settings.data.description} />
        <meta property="og:image" content={settings.data.logo.url} />
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "home");
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  
  return {
    props: {
      page,
      navigation,
      settings,
    },
  };
}
