import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import imageLoader from '../imageLoader'
import { KeyIcon } from '@heroicons/react/24/outline'

interface Props {
    img: string
    setRefToProductSend: any
}

const Banner3 = ({img, setRefToProductSend}: Props) => {
  const [isActive, setIsActive] = useState(0)
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(rowRef != null && setRefToProductSend != null) {
      setRefToProductSend(rowRef)
    } 
}, []) 

  return (
    <div className='flex flex-col min-h-[120vh] md:h-[130vh] relative text-white' ref={rowRef}>
        <div className='absolute top-0 h-[150vh] md:h-[130vh] left-0 w-screen -z-10'>
          <Image 
            src={img}
            alt={'image'}
            fill={true}
            loader={imageLoader}
            className='object-cover opacity-100'
            />
        </div>
            <div className='flex flex-col mt-20 md:mt-0 items-center ml-4 md:ml-16 lg:ml-24'>
              <div className='h-auto md:mt-16 flex flex-row md:w-full  items-start md:items-center justify-start mb-0 basis-0 grow space-x-4 md:space-x-0'>
                <div className='flex-col flex w-1/2 '>
                    <h2 className='font-medium text-2xl md:text-4xl lg:text-5xl telugu'>FROM</h2>
                    <h2 className='font-medium text-4xl md:text-6xl lg:text-7xl telugu'>GENETICS</h2>
                    <h2 className='font-medium text-3xl md:text-5xl lg:text-6xl telugu'>TO THE PLATE</h2>
                </div>
            
                <h4 className='font-light text-lg md:text-xl lg:text-2xl text-white w-1/2 pr-4 md:pr-8'>Eva Wagyu is produced following a strict Wagyu program which starts on the genetic selection and finishes on the beef market.</h4>
              </div>
              <div className='h-auto w-full md:mt-10 flex flex-row  md:w-full md:ml-16 items-start justify-start mt-8 mb-0 pr-1 pb-2 basis grow shrink-0	space-x-4 md:space-x-0'>
                <div className='flex-col flex h-64 md:h-full w-48 justify-start items-start md:w-1/2 pr-1'>
                    <div className='flex flex-row w-full h-[3.5rem] md:h-auto items-center -ml-2'>
                    <div className='relative  min-w-[70px] min-h-[60px]  md:w-[120px] md:h-[80px] md:mr-2 flex justify-center items-center'>
                    <Image 
                      src={'/images/wagyu/icono01.png'}
                      alt={'image'}
                      fill={true}
                      loader={imageLoader}
                      className='md:min-w-[40px] md:min-h-[40px] text-white'
                      />
                      </div>                        
                      {/* <hr className='block h-[3.5rem] md:h-full border-r-[1px] border-r-white m-1 p-0 border'/> */}
                        <h5 className={`text-2xl md:text-3xl lg:text-4xl pl-4 w-full pt-4 -ml-2 ${isActive == 0 ? 'goldYellowText' : 'lightGray'} cursor-pointer transition duration-500 text-start telugu`} onDragOver={() => setIsActive(0)} onClick={() => setIsActive(0)}>Genetics</h5>
                    </div>
                    <div className='flex flex-row w-full  h-[3.5rem] md:h-auto items-center -ml-2'>
                      <div className='relative  min-w-[70px] min-h-[60px]  md:w-[120px] md:h-[80px] md:mr-2 '>
                      <Image 
                      src={'/images/wagyu/icono02.png'}
                      alt={'image'}
                      fill={true}
                      loader={imageLoader}
                      className='md:min-w-[40px] md:min-h-[40px] lightGray'
                      />
                      </div>
                        <h5 className={`text-2xl md:text-3xl lg:text-4xl pl-4 pt-4 w-full ${isActive == 1 ? 'goldYellowText' : 'lightGray'} mb-5 -ml-2 cursor-pointer transition duration-500 telugu`} onDragOver={() => setIsActive(1)} onClick={() => setIsActive(1)}>Breeding</h5>
                    </div>
                    <div className='flex flex-row w-full  h-[3.5rem] md:h-auto items-center -ml-2'>
                    <div className='relative min-w-[70px] min-h-[60px]  md:w-[120px] md:h-[80px] md:mr-2 '>
                      <Image 
                      src={'/images/wagyu/icono03.png'}
                      alt={'image'}
                      fill={true}
                      loader={imageLoader}
                      className='md:min-w-[40px] md:min-h-[40px] lightGray'
                      />
                      </div>                     
                        <h5 className={`text-2xl md:text-3xl lg:text-4xl pl-4 pt-4 w-full telugu ${isActive == 2 ? 'goldYellowText' : 'lightGray'} mb-5 -ml-2 cursor-pointer transition duration-500`} onDragOver={() => setIsActive(2)}onClick={() => setIsActive(2)}>Feeding</h5>
                    </div>
                    <div className='flex flex-row w-full  h-[4rem] md:h-auto items-start -ml-2'>
                    <div className='relative min-w-[70px] min-h-[60px]  md:w-[120px] md:h-[80px]  md:mr-2 '>
                      <Image 
                      src={'/images/wagyu/icono04.png'}
                      alt={'image'}
                      fill={true}
                      loader={imageLoader}
                      className='md:min-w-[40px] md:min-h-[40px] lightGray'
                      />
                      </div>                             
                        <div className='flex flex-col w-full h-auto'>
            
                        <h5 className={`text-2xl md:text-3xl lg:text-4xl pl-4 pt-4 w-full telugu -ml-2 ${isActive == 3 ? 'goldYellowText' : 'lightGray'} mb-0 cursor-pointer transition duration-500`} onDragOver={() => setIsActive(3)}onClick={() => setIsActive(3)}>Grading Processing</h5>
                        </div>
                    </div>
                </div>
                <div className='-ml-4 goldYellowText w-1/2 md:pr-4 md:!-ml-8 relative h-96 md:h-72'>
                  <h4 className={`font-light text-xl md:text-2xl lg:text-3xl absolute ${isActive != 0 ? 'opacity-0' : 'opacity-100'} transition duration-500`}>Our secret is the combination of the best Japanese Wagyu bloodlines Tajima, Shimane and Akaushi so as to achieve and maximize marbling, carcass weights and taste experience.</h4> 
                  <h4 className={`font-light text-xl md:text-2xl lg:text-3xl absolute ${isActive != 1 ? 'opacity-0' : 'opacity-100'} transition duration-500 mb-12`}>Our Wagyu cattle are born and raised in one of the most pure and natural environments in the world, Uruguay. Following feeding protocols, fresh air, pure water, sun and grass are the main ingredients used to raise and grow our cattle.</h4> 
                  <h4 className={`font-light text-xl md:text-2xl lg:text-3xl absolute ${isActive != 2 ? 'opacity-0' : 'opacity-100'} transition duration-500`}>
All our Wagyu cattle are grain fed, in selected feedlots, with special diets for more than 330 days achieving an excellent marbling and carcass development.</h4> 
                  <h4 className={`font-light text-xl md:text-2xl lg:text-3xl absolute ${isActive != 3 ? 'opacity-0' : 'opacity-100'} transition duration-500`}>After 48 hours from the slaughter, we grade, classify and separate all carcasses depending on the quality level. Marbling scores 4 to 9 working with Aus Meat marbling scale from 0 to 9.</h4> 
                </div>
         
              </div>
            </div>
            <div className={`flex flex-col space-y-4 ml-12 md:mt-8 p-4 pb-18 md:pl-20 ${isActive != 1 ? 'mt-0' : 'mt-16'}`}>
                <h3 className='text-xl font-light md:text-2xl lg:text-3xl text-white'>Starting from genetics to exporting the meat, working and controlling every step of the production process from start to finish.</h3>
                <h3 className='text-xl font-light md:text-2xl lg:text-3xl text-white '>Through our wagyu production program, we are able to reach and offer a high quality product, destined to the most demanding markets of the world.</h3>
            </div>


    </div>
  )
}

export default Banner3