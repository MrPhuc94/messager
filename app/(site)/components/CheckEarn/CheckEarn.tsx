import Image from 'next/image'
import React from 'react'
import Illustration from '@/public/images/Illustration.svg'
import './style.scss';
import arrowRight from '@/app/assets/ArrowRight.svg'
import iconTimeLine from '@/app/assets/timeLine.svg'
import Illustration1 from '@/app/assets/Illustration.svg'

Illustration

const CheckEarn = () => {
    return (
        <>
            <div className='checkEarn w-full py-[100px]'>
                <div className="w-full text-white justify-center text-bold text-3xl text-center">
                    Check how much you can earn
                </div>
                <div className='text-[#E0E0E0] text-center sm:w-[50%] m-auto mt-[20px]'>
                    Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.
                </div>
            </div>
            <div className="market h-[40vh] w-full">

            </div>
        </>
    )
}

export default CheckEarn