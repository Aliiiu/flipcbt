import Image from 'next/image'
import React, { useState } from 'react'

const QA = [
  {
    question: "Why should I use the flip app?",
    answer: `The flip app is economical and accurate and gives the best results possible.`
  },
  {
    question: "Is my data secure?",
    answer: `Yes, your data is secure, and provisions have been made to enable confidentiality and security.`
  },
  {
    question: "How accessible is it?",
    answer: `The FLIP app is very accessible and can be used by both secondary schools and organisations.`
  },
  {
    question: "Do I need the internet to use the app?",
    answer: `The app has been designed with free internet software for fair usage for secondary
     schools while organizations need to engage the use of internet internet.`
  },
]
const Faqs = () => {
  const [active, setActive] = useState<boolean>(false)
  const [currQuestion, setCurrQuestion] = useState<number>(0)
  
  const handleClick = (e: React.MouseEvent, index:number) => {
    e.preventDefault();
    setActive(prevState => !prevState)
    setCurrQuestion(index)
  }
  
  return (
    <section className='bg-white pb-[4rem] md:px-20 mobile:px-5'>
      <div className="container">
      <div className='text-center pt-[5rem] mb-[4rem] space-y-4 mobile:mx-5'>
        <div className='flex justify-center'>
          <div className='relative'>
              <h2 className='inline-block z-10 font-semibold text-[45px] mb-4 mobile:text-[28px]'>FAQs</h2>
              <span className='inline-block absolute top-[18px] md:top-[28px] right-[3px] bg-[rgba(0,117,255,0.5)] rounded-[8px] w-[65px] md:w-[105px] mobile:h-[12px] md:h-[25px]'></span>
          </div>
        </div>
          <p className='mx-auto text-sm md:w-7/12'>We have carefully prepared a list of most frequent inquiries for you.
            This will give you more knowledge and insights into the app</p>
      </div>
      <div className='grid grid-cols-1 gap-3 justify-items-center'>
        {QA.map((item, index) => (
                <div className="w-full py-4 bg-white border rounded-[20px] shadow-[0px_25px_50px_rgba(22,25,79,0.1)] mobile:w-full mobile:shadow-md text-md" key={index}>
                    <a href="#" onClick={(e) => handleClick(e, index)}  className="flex items-center justify-between py-3 mobile:py-0 md:px-8 mobile:px-4">
                        <h3 className={`font-semibold w-full border-[#E0E0E0] mobile:px-2`}>{item.question}</h3>
                        {
                            (active && currQuestion === index) ? (
                                <button className="text-3xl font-bold bg-transparent border-none text-purple">
                                    <Image src='/minus.svg' alt='minus icon' width='28px' height='28px' />
                                </button>
                            ) : (
                                <button className="text-3xl font-bold bg-transparent border-none text-purple">
                                    <Image src='/plus.svg' alt='plus icon' width='28px' height='28px' />
                                </button>
                            )
                        }
                    </a>
                    {
              (active && currQuestion === index) ? (
                                <>
                                  <hr />
                                  <div className="flex flex-wrap py-3 md:px-8 mobile:text-gray-400 mobile:px-4" >
                                      <p>{item.answer}</p>
                                  </div>
                                </>
                            
                        ) : null
                    }
                </div>
            ))}
      </div>
      </div>
    </section>
  )
}

export default Faqs