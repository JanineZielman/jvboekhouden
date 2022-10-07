import React from 'react'
import { PrismicLink } from '@prismicio/react'

const Inspiratie = ({ slice }) => (
  <section className='inspiratie' id={`${slice.primary.titel ? slice.primary.titel.split(' ')[0] : ''}`}>
    <div className='container'>
      {slice.primary.titel && <h1>{slice.primary.titel}</h1>}
      <div className='flex wrap'>
        {slice.items?.map((item, i) => {
          return(
            <div className='insp-item' key={`insp-${i}`}>
              <div className='image'>
                <img src={item.afbeelding?.url}/>
                {item.link?.url &&
                  <div className="read-more center">
                    <PrismicLink field={item.link}>
                      <div className='bg'></div>
                      {item.link_label}
                    </PrismicLink>
                  </div>
                }
              </div>
              {item.titel && <h2>{item.titel}</h2>}
            </div>
          )
        })}
      </div>
    </div>
  </section>
)

export default Inspiratie