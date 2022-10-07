import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'

const Kolommen = ({ slice }) => {
  return(
    <section className='kolommen' id={`${slice.primary.titel ? slice.primary.titel.split(' ')[0] : ''}`}>
      <div className='container'>
        <img className="default" src={slice.primary.afbeelding.url}/>
        {slice.primary.titel && <h1>{slice.primary.titel}</h1>}
        <div className='flex'>
          <div className='column'>
            <PrismicRichText field={slice.primary.kolom1}/>
          </div>
          <div className='column'>
            <PrismicRichText field={slice.primary.kolom2}/>
          </div>
        </div>
        <div className='align-right'>
         {slice.primary.link?.url &&
            <div className="read-more right">
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

export default Kolommen