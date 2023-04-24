import Image from 'next/image'
import React from 'react'
import imageLoader from '../imageLoader'
import { motion as m, AnimatePresence} from 'framer-motion'
import { headContentAnimation } from '../config/motion';
interface Props {
    img: string
}

const Banner1 = ({img}: Props) => {
  return (
    <m.div   className='flex flex-col h-screen text-white'>
        <div className='h-full left-0 w-screen absolute -z-10 mt-12'>
          <Image 
            src={img}
            alt={'image'}
            fill={true}
            loader={imageLoader}
            className='object-cover opacity-100 object-top'
            />
        </div>
            <m.div {...headContentAnimation} className='flex flex-row mt-20 ml-16 items-center h-full'>
              <div className='h-full mt-40 flex flex-col md:mt-80 w-[60%]'>
                <h1 className='font-medium text-6xl md:text-7xl lg:text-8xl mb-8'>EVA WAGYU</h1>
                <h2 className='font-normal text-5xl md:text-6xl md:w-4/5 lg:text-6xl goldYellowText mb-20'>The Uruguayan marbeled.</h2>
                <h3 className='font-light text-2xl pt-12 md:text-3xl italic'>By the pioneers of Wagyu in Uruguay.</h3>
              </div>
              <div>
                
              </div>
            </m.div>

    </m.div>
  )
}

export default Banner1