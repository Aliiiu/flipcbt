import React, { Fragment } from 'react';
import Image from 'next/image';
import styles from "../styles/home.module.css";

const Data = [
    {
        heading: 'Turn student engagement into meaningful data',
        content: `Running a business can be demanding, having motivated employees is paramount to our success 
            and with earnipay’s flexible salary payment solutions, productivity isn’t a demand anymore, it’s a
            lifestyle.`,
        alt: 'Data Analytics Illustration',
        image: '/Ransom.png'
    },
    {
        heading: 'Remote friendly - no need for participants to juggle tabs. They see questions on their own device',
        content: `Running a business can be demanding, having motivated employees is paramount 
          to our success and with earnipay’s flexible salary payment solutions, 
          productivity isn’t a demand anymore, it’s a lifestyle.`,
        alt: 'Remote Friendly Illustration',
        image: '/Friendship.png'
    },
    {
        heading: 'All reports are saved and can be accessed at any time',
        content: `Running a business can be demanding, having motivated employees is paramount to our success 
            and with earnipay’s flexible salary payment solutions, productivity isn’t a demand anymore, it’s a
            lifestyle.`,
        alt: 'Book Kepping Illustration',
        image: '/SecureServer.png'
    },
    {
        heading: 'Turn student engagement into meaningful data',
        content: `Running a business can be demanding, having motivated employees is paramount to our success 
            and with earnipay’s flexible salary payment solutions, productivity isn’t a demand anymore, it’s a
            lifestyle.`,
        alt: 'Happy Students Illustration',
        image: '/HappyStudent.png'
    },
]

const FeatureForSchool = () => {
  return (
    <Fragment>
      <section className='container md:px-20 pt-12 px-3'>
          <div className='relative'>
                  <h1
                      className='inline-block md:text-[55px] text-[32px] text-center font-bold md:px-20 pt-9 mobile:pt-5 mb-[2em]'>
                      90% of students who use Flip report higher grades</h1>
                  <span
                      className='inline-block absolute top-[42px] md:top-[75px] left-[130px] md:left-[303px] bg-[rgba(0,117,255,0.5)] rounded-[8px] w-[140px] md:w-[230px] mobile:h-[14px] md:h-[20px]'></span>
          </div>
          {Data.map((item, index) => (
              <section key={index}
                  className={`${
                  index % 2 === 0 ? styles.bigfeatleft : styles.bigfeatright
                  } w-full mobile:w-auto flex flex-row mb-9 md:mb-[7em] mobile:mb-[7em] justify-between ${(index + 1) % 2 === 0 && "flex-row-reverse"}`}
            >
              <div className={`w-6/12 mobile:w-full mobile:text-center`}>
          
                      <div className="hidden mx-auto mb-10 mobile:block">
                          <Image
                              src={item.image}
                              alt={item.alt}
                              width="300px"
                              height="300px"
                            
                          />
                      </div>
                      <h1 className="font-bold md:pt-[2em] lg:pt-[4em]">{item.heading}</h1>
                      <p className="mt-6">
                          {item.content}
                      </p>
                  </div>
                  <div className="mobile:hidden w-1/2">
                      <Image
                          src={item.image}
                          alt={item.alt}
                          width="551px"
                          height="551px"
                          style={{margin: 0}}
                          
                      />
                  </div>
              </section>
          ))}
      </section>
      </Fragment>
  )
}

export default FeatureForSchool;

