import Image from 'next/image'
import React from 'react'
import Illustration from '@/public/images/Illustration.svg'
import './style.scss';

const Header = () => {
  return (
      <div className='header w-full flex'>
          <div className="flex-initial w-50">asdasd</div>
          <div className="flex-initial w-50">
              <Image src={Illustration} alt=""/>
          </div>
    </div>
  )
}

export default Header