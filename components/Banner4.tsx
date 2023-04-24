import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import imageLoader from '../imageLoader'

interface Props {
    img: string
    setRefToPioneersSend: any
}

const Banner1 = ({img, setRefToPioneersSend}: Props) => {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(rowRef != null && setRefToPioneersSend != null) {
      setRefToPioneersSend(rowRef)
    } 
}, []) 

  return (
    <div className='flex flex-col h-auto lg:h-[110vh] relative top-0 overflow-hidden' ref={rowRef}>
        <div className='absolute top-0 h-full left-0 w-screen -z-10 overflow-hidden'>
          <Image 
            src={img}
            alt={'image'}
            fill={true}
            loader={imageLoader}
            className='object-cover opacity-100'
            />
        </div>
            <div className='flex flex-col space-y-8 md:space-y-12 mt-20 items-center w-full h-full'>
              <div className='h-auto flex flex-col space-y-8 w-full justify-center items-center'>
                <h1 className='font-medium text-5xl md:text-6xl lg:text-7xl w-full text-center telugu'>WAGYU PIONEERS</h1>
                <h4 className='font-light text-2xl md:text-3xl text-center telugu'>More than 20 years involved in Wagyu.</h4>
              </div>
              <div className='flex flex-col lg:flex-row md:h-auto w-full md:w-full h-1/2 md:space-x-4 items-center lg:items-end lg:pr-52'>
                <div className='flex flex-col md:h-full w-full md:w-[60%] h-auto !mb-12 md:mb-0 space-y-6 md:space-y-12 md:justify-start md:ml-12 p-4 md:p-1 lg:pt-36'>
                <p className=' font-light text-xl md:text-2xl text-center'>EVA WAGYU is created and produced by the Uruguayan Wagyu pioneers, involved in Wagyu since 2002 when the Wagyu breed was introduced in Uruguay by the Aishemberg family.</p>
                <p className=' font-light text-xl md:text-2xl text-center'>Mario Aishemberg and his family are passionate about Wagyu, and have been working and developing the Wagyu breed in Uruguay and South America for the last 20 years.</p>
                <p className=' font-light text-xl md:text-2xl text-center'>Eva Wagyu brand is the evolution of years of experience producing and marketing Wagyu genetics and Wagyu beef worldwide.</p>

                </div>
                {/* <div className='flex w-full md:max-w-[43%] min-h-[50%] lg:w-[38%] bg-black absolute bottom-0 md:right-0 md:overflow-hidden justify-end'> */}
                <Image 
                    src={'/images/wagyu/Bloque04_Foto_Fundador.jpg'}
                    alt={'image'}
                    loader={imageLoader}
                    width={500}
                    height={500}
                    className='opacity-100 min-md:w-60 min-md:h-60 relative lg:absolute bottom-0 lg:right-0'
                    />
                {/* </div> */}
              </div>
            </div>

    </div>
  )
}

export default Banner1