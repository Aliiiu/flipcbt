import Image from 'next/image'
import React, { useState } from 'react'

const QA = [
  {
    question: "What is Flip?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla nunc, sit phasellus nulla at.
     Praesent dolor eget quis volutpat, nisi a, tristique. Nisl aliquam dignissim odio quisque. Ut aliquam tristique gravida porta.`
  },
  {
    question: "What is the benefits of using Flip?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla nunc, sit phasellus nulla at.
     Praesent dolor eget quis volutpat, nisi a, tristique. Nisl aliquam dignissim odio quisque. Ut aliquam tristique gravida porta.`
  },
  {
    question: "Can I be a marketer for Flip?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla nunc, sit phasellus nulla at.
     Praesent dolor eget quis volutpat, nisi a, tristique. Nisl aliquam dignissim odio quisque. Ut aliquam tristique gravida porta.`
  },
  {
    question: "What is Flip all about?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla nunc, sit phasellus nulla at.
     Praesent dolor eget quis volutpat, nisi a, tristique. Nisl aliquam dignissim odio quisque. Ut aliquam tristique gravida porta.`
  },
  {
    question: "How can i be a part of the beneficiary of flip?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla nunc, sit phasellus nulla at.
     Praesent dolor eget quis volutpat, nisi a, tristique. Nisl aliquam dignissim odio quisque. Ut aliquam tristique gravida porta.`
  },
]
const Faqs = () => {
  const [active, setActive] = useState<boolean>(false)
  const [currQuestion, setCurrQuestion] = useState<number>(0)
  const handleClick = (index:number) => {
    setActive(prevState => !prevState)
    setCurrQuestion(index)
    console.log('done')
  }
  
  return (
    <section className='bg-white pb-[4rem] md:px-20 mobile:px-5'>
      <div className="container">
      <div className='text-center pt-[5rem] mb-[4rem] space-y-4 mobile:mx-5'>
        <h2 className='font-semibold text-[50px] mb-4 mobile:text-[28px]'>FAQs</h2>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo beatae mollitia, placeat illum magni</p>
      </div>
      <div className='grid grid-cols-1 gap-3 justify-items-center md:mx-20 mobile:mx-4'>
        {QA.map((item, index) => (
                <div className="w-full py-4 bg-white border rounded-[20px] shadow-[0px_25px_50px_rgba(22,25,79,0.1)] mobile:w-full mobile:shadow-md text-md" key={index}>
                    <a href="javascript:void(0);" onClick={() => handleClick(index)}  className="flex items-center justify-between py-3 md:px-8 mobile:px-4">
                        <h3 className={`font-semibold text-lg w-full mobile:px-2`}>{item.question}</h3>
                        {
                            (active && currQuestion === index) ? (
                                <button className="text-3xl font-bold bg-transparent border-none text-purple">
                                    <Image src='/minus-icon.png' alt='minus icon' width='32px' height='32px' />
                                </button>
                            ) : (
                                <button className="text-3xl font-bold bg-transparent border-none text-purple">
                                    <Image src='/Plus-icon.png' alt='plus icon' width='32px' height='32px' />
                                </button>
                            )
                        }
                    </a>
                    {
                        (active && currQuestion === index) ? (
                          <>
                            <hr />
                            <div className="flex flex-wrap py-8 md:px-8 mobile:text-gray-400 mobile:px-4" >
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