import React from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'

const AfbeeldingTekst = ({ slice }) => {
  return(
    <section className={`afbeelding-tekst ${slice.primary.gele_achtergrond ? 'yellow-bg' : ''}`} id={`${slice.primary.titel ? slice.primary.titel.split(' ')[0] : ''}`}>
      <div className="container flex">
        <div className={`image ${slice.primary.offset ? 'offset' : ''} ${slice.primary.overflow ? 'overflow' : ''}`}>
          <img src={slice.primary.afbeelding?.url}/>
        </div>
        <div className='text'>
          {slice.primary.titel && <h1>{slice.primary.titel}</h1>}
          <PrismicRichText field={slice.primary.tekst}/>
          {slice.primary.link?.url &&
            <div className="read-more">
              <PrismicLink field={slice.primary.link}>
                <div className='bg'></div>
                {slice.primary.link_label}
              </PrismicLink>
            </div>
          }
        </div>
      </div>
    </section>
  )
}

export default AfbeeldingTekst