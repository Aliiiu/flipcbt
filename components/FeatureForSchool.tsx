import React, { Fragment } from 'react';
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
      <h1 className='md:text-[55px] text-[32px] text-center font-bold md:px-20 pt-9'>90% of students who use Flip report higher grades</h1>
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

export default FeatureForSchool;

