import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-[#2699fb] border-t-8 border-t-[#605858] sm:py-16 py-12 px-3'>
        <div className='max-w-[1240px] mx-auto md:flex justify-between items-center py-[50px]'>
            <div className='m-2'>
                <h1 className='text-3xl md:text-4xl font-bold text-white'>Want to learn latest I.T skills?</h1>
                <span className='text-white mt-3 inline-block'>Sign up to our Newsletter and stay up to date.</span>
            </div>
            <div className='mt-5'>
                <input type="text" className='rounded mb-2 p-3 mr-2 text-slate-600 sm:w-80 w-full' placeholder='Email Address'/>
                <button className="font-bold sm:w-[130px] w-full bg-black text-white md:text-sm p-[15px] rounded-md">Notify Me</button>
                <p className='text-white mt-3'>
                    We can bout the protection of your data. Read more <br />
                    <a href="#" className='text-black'>Privacy Policy</a>
                </p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter