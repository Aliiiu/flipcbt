import React, { Fragment } from 'react';
import styles from "../styles/home.module.css";

const Data = [
    {
        heading: 'Improve Employee Productivity',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget at volutpat neque. 
        Lacus, eu ornare parturient odio leo tortor.Habitant risus tellus fames iaculis odio ultrices urna.
        Vulputate mi ultricies morbi sed.`,
        alt: 'Data Analytics Illustration',
        image: '/productivity.png'
    },
    {
        heading: 'Responsible access controlled by you',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget at volutpat neque. 
        Lacus, eu ornare parturient odio leo tortor.Habitant risus tellus fames iaculis odio ultrices urna.
        Vulputate mi ultricies morbi sed.`,
        alt: 'Remote Friendly Illustration',
        image: '/SecuredAccess.png'
    },
    {
        heading: '100% Success is Guaranteed',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget at volutpat neque. 
        Lacus, eu ornare parturient odio leo tortor.Habitant risus tellus fames iaculis odio ultrices urna.
        Vulputate mi ultricies morbi sed.`,
        alt: 'Book Kepping Illustration',
        image: '/Achievement.png'
    },
]

const FeatureOrganisation = () => {
  return (
    <Fragment>
      <h1 className='md:text-[55px] text-[32px] text-center font-bold md:px-20 pt-9'>Guaranteed benefits <br /> to your business</h1>
      {Data.map((item, index) => (
          <section key={index}
              className={`${
              index % 2 === 0 ? styles.bigfeatleft : styles.bigfeatright
              } w-full mobile:w-auto flex flex-row mb-9 md:mb-[7em] justify-around ${index % 2 === 0 && "flex-row-reverse"}`}
        >
          <div className={`w-4/12 mobile:w-full mobile:text-center mobile:m-0 ${index % 2 === 0 && "-ml-4"} `}>
            
                  <img
                      src={item.image} 
                      alt={item.alt}
                      width="300px"
                      height="300px"
                      className="hidden mx-auto mb-10 mobile:block"
                  />

                  <h1 className="font-bold md:pt-[8rem]">{item.heading}</h1>
                  <p className="mt-3">
                      {item.content}
                  </p>
              </div>
              <img
                  src={item.image} 
                  alt={item.alt}
                  width="551px"
                  height="551px"
                  style={{margin: 0}}
                  className="mobile:hidden"
              />
          </section>
      ))}
      </Fragment>
  )
}

export default FeatureOrganisation;

