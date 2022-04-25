{
                  benefit[currTab].map((item, idx) => (
                    <div key={idx}>
                      <div className='flex flex-col'>
                        <div className='flex'>
                          <Image src='/Tick-Square.svg' alt='tick' width='20px' height='20px' />
                          <h2 className='ml-5 font-bold text-[16px] md:text-[20px]'>{item.title}</h2>
                        </div>
                        <p className='mt-4 text-[15px] md:text-[16px]'>{item.content}
                        </p>
                      </div>
                      <button className='py-3 text-base text-white bg-blue-500 rounded-md px-[4rem] md:py-5'>
                        GET STARTED
                      </button>
                    </div>
                  ))
                }