import React from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'

const TekstDubbeleAfbeelding = ({ slice }) => {
  return(
    <section className={`tekst-dubbele-afbeelding ${slice.primary.gele_achtergrond ? 'yellow-bg' : ''}`} id={`${slice.primary.titel ? slice.primary.titel.split(' ')[0] : ''}`}>
      <div className="container flex">
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
        <div className='double-image'>
          <img className="image2" src={slice.primary.afbeelding2?.url}/>
          <img className="image1" src={slice.primary.afbeelding1?.url}/>
        </div>
      </div>
    </section>
  )
}

export default TekstDubbeleAfbeelding