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
      <section className='container px-5 md:px-20 pt-[6em]'>
          
            <div className='relative flex justify-center mb-[4em]'>
                  <h1 className='inline-block md:text-[45px] text-[32px] text-center font-semibold mobile:pt-9'>Guaranteed benefits <br /> to your business</h1>
                  <span className='inline-block absolute top-[58px] md:top-[30px] right-[19px] md:right-[148px] lg:right-[373px] bg-[rgba(0,117,255,0.5)] rounded-[8px] w-[120px] md:w-[170px] mobile:h-[14px] md:h-[20px]'></span>
                  <span className='inline-block absolute top-[107px] md:top-[98px] right-[50px] md:right-[199px] lg:right-[433px] bg-[rgba(0,117,255,0.5)] rounded-[8px] w-[130px] md:w-[170px] mobile:h-[14px] md:h-[20px]'></span>
            </div>
            {Data.map((item, index) => (
                <div key={index}
                    className={`${
                    index % 2 === 0 ? styles.bigfeatleft : styles.bigfeatright
                    } w-full mobile:w-auto flex flex-row mb-9 md:mb-[9em] mobile:mb-[8em] justify-between ${index === 1 && "flex-row-reverse"}`}
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
                        <h1 className="font-semibold lg:pt-[6em] md:pt-[3em]">{item.heading}</h1>
                        <p className="mt-3 lg:w-11/12">
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

