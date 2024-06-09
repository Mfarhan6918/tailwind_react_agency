import React from 'react';
import { FaConnectdevelop, FaAppStore } from 'react-icons/fa';
import { FcBusinessman } from 'react-icons/fc';

const Plans = () => {
  return (
    <div className='sm:py-16 py-12'>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-5'>
          <div className='shadow-xl hover:scale-105 duration-500 relative text-center p-7 rounded-md'>
            <FaConnectdevelop size={40} className='absolute -top-5 text-center inline-block text-blue-500'/>
            <h2 className='text-xl font-bold py-6'>Web Development</h2>
            <h1 className='text-3xl font-bold pb-7'>$149</h1>
            <ul className='flex flex-col'>
              <li className='border-b border-slate-200 p-2 font-medium'>Lorem ipsum dolor sit amet.</li>
              <li className='border-b border-slate-200 p-2 font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
              <li className='border-b border-slate-200 p-2 font-medium'>Lorem ipsum dolor sit, amet consectetur!</li>
              <li className='border-b border-slate-200 p-2 font-medium'>Lorem ipsum dolor sit simply dumn.</li>
            </ul>
            <button className="bg-blue-500 text-white font-bold md:text-sm px-6 py-2 mt-6 rounded-md">Start Trial</button>
          </div>
          <div className='shadow-xl bg-gray-100 hover:scale-105 duration-500 relative md:mt-0 mt-[80px] text-center p-7 rounded-md'>
            <FcBusinessman size={55} className='absolute -top-9 left-[45%] inline-block'/>
            <h2 className='text-xl font-bold py-6'>Digital Markeeting</h2>
            <h1 className='text-3xl font-bold pb-7'>$149</h1>
            <ul className='flex flex-col'>
              <li className='border-b border-slate-200 p-2 font-medium'>Lorem ipsum dolor sit amet.</li>
              <li className='border-b border-slate-200 p-2 font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
              <li className='border-b border-slate-200 p-2 font-medium'>Lorem ipsum dolor sit, amet consectetur!</li>
              <li className='border-b border-slate-200 p-2 font-medium'>Lorem ipsum dolor sit simply dumn.</li>
            </ul>
            <button className="bg-black text-white font-bold md:text-sm px-6 py-2 mt-6 rounded-md">Start Trial</button>
          </div>
          <div className='shadow-xl hover:scale-105 duration-500 relative md:mt-0 mt-[80px] text-center p-7 rounded-md'>
            <FaAppStore size={40} className='absolute -top-5 text-center inline-block text-blue-500'/>
            <h2 className='text-xl font-bold py-6'>App Development</h2>
            <h1 className='text-3xl font-bold pb-7'>$149</h1>
            <ul className='flex flex-col'>
              <li className='border-b border-slate-200 p-2 font-medium'>Lorem ipsum dolor sit amet.</li>
              <li className='border-b border-slate-200 p-2 font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
              <li className='border-b border-slate-200 p-2 font-medium'>Lorem ipsum dolor sit, amet consectetur!</li>
              <li className='border-b border-slate-200 p-2 font-medium'>Lorem ipsum dolor sit simply dumn.</li>
            </ul>
            <button className="bg-blue-500 text-white md:text-sm font-bold px-6 py-2 mt-6 rounded-md">Start Trial</button>
          </div>
        </div>
        
    {/* <div class="max-w-[1320px] md:py-[80px] py-5 flex mx-auto lg:flex-row flex-col">
      <div class="basis-[45%] lg:mb-0 mb-5">
        <img class="w-full" src="" alt="" />
      </div>
      <div class="basis-[55%] px-7">
        <h1 class="sm:text-4xl text-3xl pb-3">Malik Creation: Pakistan's Most-Trusted IT Training Institute</h1>
        <p class="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ullam repellat 
          accusamus libero vel molestias quasi explicabo fugiat maxime voluptas.</p>
        <p class="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fuga ad pariatur, 
          quibusdam deserunt, quae corporis perferendis tempora esse, sequi distinctio 
          suscipit porro veritatis aliquid debitis explicabo soluta? Animi, quod? Lorem, ipsum 
          dolor sit amet consectetur adipisicing elit.</p>
        <p class="py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Quisquam laboriosam amet quis voluptatum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Quisquam laboriosam amet quis voluptatum.</p>

      </div>
    </div> */}
    </div>
  )
}

export default Plans