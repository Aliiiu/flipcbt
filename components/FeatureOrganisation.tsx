import React, { Fragment } from 'react';
import Image from 'next/image';
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
      <section className='container px-5 md:px-20 pt-9'>
          
            <h1 className='md:text-[55px] text-[32px] text-center font-bold mobile:pt-9'>Guaranteed benefits <br /> to your business</h1>
            {Data.map((item, index) => (
                <div key={index}
                    className={`${
                    index % 2 === 0 ? styles.bigfeatleft : styles.bigfeatright
                    } w-full mobile:w-auto flex flex-row mb-9 md:mb-[2em] justify-between ${index === 1 && "flex-row-reverse"}`}
            >
                <div className={`w-6/12 mobile:w-full mobile:text-center `}>
            
                        <div className="hidden mx-auto mb-10 mobile:block">
                            <Image
                                src={item.image}
                                alt={item.alt}
                                width="300px"
                                height="300px"
            
                            />
                        </div>
                        <h1 className="font-bold lg:pt-[6em] md:pt-[3em]">{item.heading}</h1>
                        <p className="mt-3 text-[20px] lg:w-11/12">
                            {item.content}
                        </p>
                    </div>
                    <div className="mobile:hidden m-0">
                        <Image
                            src={item.image}
                            alt={item.alt}
                            width="551px"
                            height="551px"
            
                        />
                    </div>
                </div>
            ))}
      </section>
      </Fragment>
  )
}

export default FeatureOrganisation;

