import React from 'react'
import { PrismicLink } from '@prismicio/react'

const Aanbod = ({ slice }) => {
  return(
    <section className='aanbod' id={`${slice.primary.titel ? slice.primary.titel.split(' ')[0] : ''}`}>
      <div className='container'>
        {slice.primary.titel && <h1>{slice.primary.titel}</h1>}
        <div className='flex'>
          {slice.items?.map((item, i) => {
            return(
              <div className='item' key={`item-${i}`}>
                <img className='default' src={item.afbeelding?.url}/>
                <h2>{item.titel}</h2>
                <span>{item.onder_titel}</span>
                 {item.link?.url &&
                    <div className="read-more">
                      <a href={`/${item.link?.uid}#${item.titel.split(' ')[0]}`}>
                        <div className='bg'></div>
                        {item.link_label}
                      </a>
                    </div>
                  }
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Aanbod