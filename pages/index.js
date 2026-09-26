import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Website in aanbouw | JV Boekhouding</title>
        <meta
          name="description"
          content="De website van JV Boekhouding wordt vernieuwd."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Website in aanbouw | JV Boekhouding" />
        <meta
          property="og:description"
          content="De website van JV Boekhouding wordt vernieuwd."
        />
      </Head>

      <div className="construction-page">
        <header aria-label="JV Boekhouding">
          <div className="mark" aria-hidden="true">JV.</div>
        </header>

        <main>
          <div className="brand" role="img" aria-label="JV. Boekhouding en fiscaliteit">
            <div className="brand-main" aria-hidden="true">JV.</div>
            <div className="brand-sub" aria-hidden="true">
              Boekhouding &amp; fiscaliteit
            </div>
          </div>

          <section className="message" aria-labelledby="construction-heading">
            <h1 id="construction-heading">Aan deze website wordt hard gewerkt!</h1>
            <p>
              We werken aan een vernieuwde website. Binnenkort vindt u hier
              meer informatie over JV Boekhouding. Bedankt voor uw geduld!
            </p>
          </section>
        </main>

        <footer>KvK-nummer: 82615136 &nbsp;|&nbsp; © JV Boekhouding</footer>
      </div>

      <style>{`
        .construction-page {
          --paper: #f6f1f1;
          --coral: #dd6d70;
          box-sizing: border-box;
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          background: var(--paper);
          color: #111;
          font-family: Arial, Helvetica, sans-serif;
        }
        .construction-page * { box-sizing: border-box; }
        .construction-page header { padding: 13px clamp(24px, 3vw, 42px); }
        .construction-page .mark {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--coral);
          color: #fff;
          font-size: 27px;
          letter-spacing: -2px;
          line-height: 1;
        }
        .construction-page main {
          width: min(1110px, calc(100% - 48px));
          margin: auto;
          padding: 64px 0 90px;
          display: grid;
          grid-template-columns: minmax(0, 435px) minmax(0, 1fr);
          align-items: center;
          gap: clamp(60px, 8vw, 110px);
        }
        .construction-page .brand { width: 100%; }
        .construction-page .brand-main {
          aspect-ratio: 435 / 350;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--coral);
          color: #fff;
          font-size: clamp(105px, 16vw, 245px);
          line-height: .8;
          letter-spacing: -.11em;
          padding-right: .12em;
        }
        .construction-page .brand-sub {
          margin-top: 12px;
          padding: 18px 10px;
          background: var(--coral);
          color: #fff;
          text-align: center;
          font-size: clamp(17px, 2vw, 27px);
          font-weight: 600;
        }
        .construction-page h1 {
          margin: 0 0 16px;
          font-size: clamp(39px, 4vw, 52px);
          font-weight: 400;
          line-height: 1.12;
          letter-spacing: -.025em;
        }
        .construction-page p {
          max-width: 560px;
          margin: 0;
          padding-top: 15px;
          border-top: 1px solid currentColor;
          font-size: clamp(18px, 1.7vw, 21px);
          line-height: 1.42;
        }
        .construction-page footer { padding: 22px clamp(24px, 3vw, 42px); font-size: 14px; }
        @media (max-width: 760px) {
          .construction-page main {
            width: min(520px, calc(100% - 48px));
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 54px 0 72px;
          }
          .construction-page .brand { max-width: 350px; }
          .construction-page .brand-main { font-size: clamp(130px, 39vw, 205px); }
          .construction-page h1 { font-size: clamp(38px, 9vw, 50px); }
        }
      `}</style>
      <style>{`
        html, body, #__next { min-height: 100%; margin: 0; }
      `}</style>
    </>
  );
}
