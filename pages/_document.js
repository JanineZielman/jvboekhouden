import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="nl">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.typekit.net/hmq5tdx.css"></link>

        <link rel="icon" type="image/svg+xml" href="/jv-boekhouding-fav.svg"/>
        <meta name="msapplication-TileColor" content="#F5F3E6"/>
        <meta name="theme-color" content="#F5F3E6"/>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-63V9SSGDYE"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-63V9SSGDYE', { page_path: window.location.pathname });
            `,
          }}
        />

        
      </Head>
      <body className="overflow-x-hidden antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
