import Image from 'next/image'
import React from 'react'
import imageLoader from '../imageLoader'

interface Props {
    img: string
}

const Banner2 = ({img}: Props) => {
  return (
    <div className='flex flex-col h-[130vh] md:h-[110vh] relative top-0'>
        <div className='absolute top-0 h-[130vh] md:h-[110vh]  left-0 w-screen -z-10'>
          <Image 
            src={img}
            alt={'image'}
            fill={true}
            loader={imageLoader}
            className='object-cover opacity-100 object-left-top'
            />
        </div>
            <div className='flex md:flex-row flex-col mt-20 md:mt-0 justify-evenly items-center'>
              <div className='h-auto md:mt-48 flex flex-col space-y-8 w-[60%] lg:-ml-56'>
                <h1 className='font-medium text-5xl md:text-6xl lg:text-7xl w-2/5 -ml-4 goldYellowOffText'>EVA WAGYU</h1>
                <h4 className='font-light text-2xl md:text-3xl -ml-4 md:!mt-36 !mt-12'>Eva Wagyu is crossbred Wagyu F1 to F4, with the best genetic selection.</h4>
                <h4 className='font-light text-2xl md:text-3xl -ml-4'>Born and raised in Uruguay, with fresh air, pure water, sun and grass by top Uruguayan farmers, grain finished for more than 330 days, achieving marbling scores from 4 to 9, supplying the most demanding markets worldwide.</h4>
              </div>
              <div className='md:hidden block w-full'>
              <Image 
                src={'/images/wagyu/fondo_imagen_Bloque02_responsive.jpg'}
                alt={'image'}
                loader={imageLoader}
                height={500}
                width={500}
                className='opacity-100 object-left-top !mr-0 w-full'
                />
              </div>  
            </div>

    </div>
  )
}

export default Banner2