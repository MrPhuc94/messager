import Image from 'next/image'
import React from 'react'
import Illustration from '@/public/images/Illustration.svg'
import './style.scss';
import arrowRight from '@/app/assets/ArrowRight.svg'
import iconTimeLine from '@/app/assets/timeLine.svg'
import Illustration1 from '@/app/assets/Illustration.svg'

Illustration

const Statistic = () => {
    return (
        <>
            <div className='statistic w-full flex md:px-[80px] px-[20px] py-[40px] flex-col md:flex-row'>
                <div className="sm:grid grid-cols-3 gap-4 w-full">
                    <div className="itemTab flex items-center content-between mb-[20px] sm:justify-center">
                        <div className="icon">
                            <Image src={iconTimeLine} alt="" />
                        </div>
                        <div className="ml-4">
                            <h4 className="text-white">10M+</h4>
                            <p className="text-white">Digital Currency Exchanged</p>
                        </div>
                    </div>
                    <div className="itemTab flex items-center content-between mb-[20px] sm:justify-center">
                        <div className="icon">
                            <Image src={iconTimeLine} alt="" />

                        </div>
                        <div className="ml-4">
                            <h4 className="text-white">10M+</h4>
                            <p className="text-white">Digital Currency Exchanged</p>
                        </div>
                    </div>
                    <div className="itemTab flex items-center content-between sm:justify-center">
                        <div className="icon">
                            <Image src={iconTimeLine} alt="" />

                        </div>
                        <div className="ml-4">
                            <h4 className="text-white">10M+</h4>
                            <p className="text-white">Digital Currency Exchanged</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header w-full flex md:px-[80px] px-[20px] pt-[20px] sm:pt-[100px] pb-[100px] flex-col md:flex-row'>
                <div className="flex-1 pb-[100px] sm:pb-[0px]">
                    <Image src={Illustration1} alt="" className='m-auto' />
                </div>
                <div className="flex-1">
                    <div className="title text-white text-5xl text-bold">
                        Why you should choose CRAPPO
                    </div>
                    <div className="description text-white mt-10">
                        Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.
                    </div>
                    <button className="bg-[#3671E9] hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center mt-[20px]">
                        <span>Learn More</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Statistic