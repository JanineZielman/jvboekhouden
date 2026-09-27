import Head from "next/head";

const services = [
  ["01", "Financiële administratie", "Een administratie die overzicht geeft en met je onderneming meebeweegt. Van inrichting tot het verwerken van financiële mutaties."],
  ["02", "Aangiftes", "Voorbereiden en indienen van aangiftes OB/ICP, inkomstenbelasting en loonheffingen. Ook voorbereiding voor VPB en dividendbelasting."],
  ["03", "Jaarafsluiting", "Controlewerkzaamheden en een zorgvuldige voorbereiding van de jaarcijfers, zodat je weet waar je staat."],
];

export default function Home() {
  return <>
    <Head>
      <title>JV Boekhouding — Ruimte voor ondernemen</title>
      <meta name="description" content="Janneke Zielman-Verhoeven ondersteunt startende ondernemers, zzp’ers en mkb’ers met hun financiële administratie vanuit Gendt." />
      <meta property="og:title" content="JV Boekhouding — Ruimte voor ondernemen" />
      <meta property="og:description" content="Persoonlijke ondersteuning bij financiële administratie, aangiftes en jaarafsluiting." />
      <meta name="theme-color" content="#F5F3E6" />
      <link rel="icon" type="image/svg+xml" href="/jv-boekhouding-fav.svg" />
    </Head>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="JV Boekhouding, terug naar boven"><img src="/jv-boekhouding-logo.svg" alt="JV Boekhouding" /></a>
      <nav aria-label="Hoofdnavigatie"><a href="#diensten">Diensten</a><a href="#over">Over Janneke</a><a className="nav-contact" href="#contact">Contact <span aria-hidden="true">↗</span></a></nav>
    </header>
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content"><p className="eyebrow">JV Boekhouding · Gendt</p><h1 id="hero-title">Meer overzicht.<br /><em>Meer ruimte</em> om te ondernemen.</h1><p className="hero-intro">Je wilt ondernemen, niet verdwalen in je administratie. Ik help je om je cijfers helder en op orde te houden — persoonlijk, zorgvuldig en afgestemd op wat jij nodig hebt.</p><a className="button button-dark" href="mailto:jannekezielman@gmail.com?subject=Kennismaken%20met%20JV%20Boekhouding">Laten we kennismaken <span aria-hidden="true">↗</span></a></div>
        <div className="hero-art" aria-hidden="true"><div className="hero-circle"><span>Rust in je cijfers.<br />Ruimte in je hoofd.</span></div><span className="orbit orbit-one"/><span className="orbit orbit-two"/></div>
        <div className="hero-foot"><span>Boekhouding met aandacht</span><a href="#diensten">Ontdek wat ik voor je kan doen ↓</a></div>
      </section>
      <section className="intro section-wrap" id="diensten"><div className="section-heading"><p className="eyebrow">01 / Wat ik doe</p><h2>Goed geregeld.<br /><em>Op jouw manier.</em></h2></div><div className="intro-copy"><p>Of je nu net begint of al langer onderneemt: een goede administratie geeft houvast. Samen kijken we welke ondersteuning past bij jouw bedrijf en jouw manier van werken.</p></div></section>
      <section className="services section-wrap" aria-label="Diensten">{services.map(([number,title,description])=><article className="service" key={number}><span className="service-number">{number}</span><h3>{title}</h3><p>{description}</p><span className="service-arrow" aria-hidden="true">↗</span></article>)}</section>
      <section className="about" id="over"><div className="about-mark"><img src="/jv-boekhouding-logo.svg" alt="" loading="lazy" /></div><div className="about-copy"><p className="eyebrow">02 / Aangenaam</p><h2>Hoi, ik ben <em>Janneke.</em></h2><p>Sinds 2021 ondersteun ik startende ondernemers, zzp’ers en mkb’ers bij hun financiële administratie. Ik houd van duidelijkheid, korte lijnen en werk dat zorgvuldig gedaan wordt.</p><p>Afhankelijk van jouw wensen onderhoud en verzorg ik de administratie. Zo houd jij meer tijd en aandacht over voor je onderneming.</p><a className="text-link" href="mailto:jannekezielman@gmail.com?subject=Kennismaken%20met%20JV%20Boekhouding">Stel me je vraag <span aria-hidden="true">↗</span></a></div></section>
      <section className="contact section-wrap" id="contact"><p className="eyebrow">03 / Contact</p><div className="contact-grid"><h2>Samen aan de slag?<br /><em>Ik hoor graag van je.</em></h2><div><p>Op zoek naar ondersteuning voor je administratie? Vertel me waar je tegenaan loopt of wat je nodig hebt. Dan kijken we samen of het past.</p><a className="button button-light" href="mailto:jannekezielman@gmail.com?subject=Kennismaken%20met%20JV%20Boekhouding">Mail Janneke <span aria-hidden="true">↗</span></a><a className="email" href="mailto:jannekezielman@gmail.com">jannekezielman@gmail.com</a></div></div></section>
    </main>
    <footer><a href="#top" aria-label="Terug naar boven"><img src="/jv-boekhouding-logo.svg" alt="JV Boekhouding" /></a><span>© {new Date().getFullYear()} JV Boekhouding · Gendt</span><a href="#top">Terug naar boven ↑</a></footer>
  </>;
}
