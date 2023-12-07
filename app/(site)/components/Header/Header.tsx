import Image from 'next/image'
import React from 'react'
import Illustration from '@/public/images/Illustration.svg'
import './style.scss';
import arrowRight from '@/app/assets/ArrowRight.svg'

const Header = () => {
  return (
    <div className='header w-full flex md:px-[80px] px-[20px] pt-[140px] pb-[60px] flex-col md:flex-row'>
      <div className="flex-1">
        <div className="title text-white text-5xl text-bold">
          Fastest & secure platform to invest in crypto
        </div>
        <div className="description text-white mt-10">
          Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.
        </div>
        <button className="bg-[#3671E9] hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center mt-[20px]">
          <span>Try for FREE</span>
          <Image className="ml-5" src={arrowRight} alt="arrowRight" />
        </button>
      </div>
      <div className="flex-1">
        <Image src={Illustration} alt="" className='m-auto'/>
      </div>
    </div>
  )
}

export default Header