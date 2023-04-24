import Image from 'next/image'
import React from 'react'
import imageLoader from '../imageLoader'

interface Props {
    img: string
}

const Banner2 = ({img}: Props) => {
  return (
    <div className='flex flex-col h-[110vh] relative top-0'>
        <div className='absolute top-0 h-[110vh] left-0 w-screen -z-10'>
          <Image 
            src={img}
            alt={'image'}
            fill={true}
            loader={imageLoader}
            className='object-cover opacity-100 object-left-top'
            />
        </div>
            <div className='flex flex-row mt-20 md:mt-0 justify-evenly items-center'>
              <div className='h-auto md:mt-48 flex flex-col space-y-8 w-[60%]'>
                <h1 className='font-medium text-5xl md:text-6xl lg:text-7xl w-2/5 -ml-4 goldYellowOffText'>EVA WAGYU</h1>
                <h4 className='font-light text-2xl md:text-3xl -ml-4 !mt-36'>Eva Wagyu is crossbred Wagyu F1 to F4, with the best genetic selection.</h4>
                <h4 className='font-light text-2xl md:text-3xl -ml-4'>Born and raised in Uruguay, with fresh air, pure water, sun and grass by top Uruguayan farmers, grain finished for more than 330 days, achieving marbling scores from 4 to 9, supplying the most demanding markets worldwide.</h4>
              </div>
              <div>
                
              </div>
            </div>

    </div>
  )
}

export default Banner2