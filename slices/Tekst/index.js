import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'

const Tekst = ({ slice }) => (
  <section className='tekst-section' id={`${slice.primary.titel ? slice.primary.titel.split(' ')[0] : ''}`}>
    <div className='container'>
      <img className="default" src={slice.primary.afbeelding.url}/>
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
  </section>
)

export default Tekst