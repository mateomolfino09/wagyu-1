import Image from 'next/image'
import React from 'react'
import imageLoader from '../imageLoader'

interface Props {
    img: string
}

const Banner6 = ({img}: Props) => {
  return (
    <div className='flex flex-col h-[120vh] relative top-0 text-white bg-black/20'>
        <div className='absolute top-0 h-[120vh] left-0 w-screen -z-10'>
          <Image 
            src={img}
            alt={'image'}
            fill={true}
            loader={imageLoader}
            className='object-cover opacity-100'
            />
        </div>
            <div className='flex flex-row mt-20 md:mt-0 justify-evenly items-center'>
              <div className='h-auto md:mt-40 flex flex-col space-y-8 w-full'>
                <h1 className='font-medium text-5xl md:text-6xl lg:text-7xl w-full text-center telugu'>GREAT FARMERS <br/> SHARING THE SAME VISION</h1>
                <h4 className='font-light text-2xl md:text-3xl w-full text-center !mt-28 px-12'>Eva Wagyu starts at the land of our top uruguayan pioneers farmers which have decided to walk to the next level of beef quality producing, leaving back the commodity and moving forward to produce a specialty.</h4>
              </div>
              <div>
                
              </div>
            </div>

    </div>
  )
}

export default Banner6