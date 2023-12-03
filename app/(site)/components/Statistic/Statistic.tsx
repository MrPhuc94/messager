import Image from 'next/image'
import React from 'react'
import Illustration from '@/public/images/Illustration.svg'
import './style.scss';
import arrowRight from '@/app/assets/ArrowRight.svg'
import iconTimeLine from '@/app/assets/timeLine.svg'

const Statistic = () => {
    return (
        <div className='statistic w-full flex md:px-[80px] px-[20px] py-[40px] flex-col md:flex-row'>
            <div className="grid grid-cols-3 gap-4 w-full">
                <div className="itemTab flex items-center content-between justify-center">
                    <div className="icon">
                        <Image src={iconTimeLine} alt="" />
                    </div>
                    <div className="ml-4">
                        <h4 className="text-white">10M+</h4>
                        <p className="text-white">Digital Currency Exchanged</p>
                    </div>
                </div>
                <div className="itemTab flex items-center content-between justify-center">
                    <div className="icon">
                        <Image src={iconTimeLine} alt="" />

                    </div>
                    <div className="ml-4">
                        <h4 className="text-white">10M+</h4>
                        <p className="text-white">Digital Currency Exchanged</p>
                    </div>
                </div>
                <div className="itemTab flex items-center content-between justify-center">
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
    )
}

export default Statistic